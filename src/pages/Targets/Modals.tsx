import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaCheck } from 'react-icons/fa';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';
import html2canvas from 'html2canvas';

interface TargetModalProps {
  target: {
    id: number;
    date: string;
    image: string;
    score: string;
    isPlus: boolean;
  };
  onClose: () => void;
}

const TargetModal: React.FC<TargetModalProps> = ({ target, onClose }) => {
  const [css, setCSS] = useState('');
  const outputRef = useRef<HTMLIFrameElement>(null);
  const [comparisonResult, setComparisonResult] = useState<boolean | null>(null);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleRun = () => {
    if (outputRef.current && outputRef.current.contentWindow) {
      const doc = outputRef.current.contentWindow.document;
      doc.open();
      doc.write(`
        <html>
          <head>
            <style>
              body { margin: 0; height: 100vh; background: #2C3E50; }
              ${css}
            </style>
          </head>
          <body><div></div></body>
        </html>
      `);
      doc.close();
    }
  };

  const compareImages = async () => {
    if (!outputRef.current) return;

    const outputCanvas = await html2canvas(outputRef.current.contentWindow!.document.body, {
      width: 400,
      height: 300,
    });

    const outputBlob = await new Promise<Blob>((resolve) => {
      outputCanvas.toBlob((blob) => resolve(blob!), 'image/png');
    });

    const formData = new FormData();
    formData.append('output', outputBlob, 'output.png');
    formData.append('targetId', target.id.toString());
    formData.append('css', css);

    try {
      const response = await fetch('http://localhost:3000/api/compare-images', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to compare images');
      }

      const result = await response.json();
      setComparisonResult(result.match);
      setScore(result.score);
    } catch (error) {
      console.error('Error comparing images:', error);
      setComparisonResult(false);
      setScore(null);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B1B24] bg-opacity-95"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl h-[90vh] overflow-hidden bg-[#1B1B24] rounded-lg shadow-2xl flex flex-col"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute z-10 text-gray-400 transition-colors duration-200 top-2 right-2 hover:text-white"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Modal Content */}
          <div className="flex flex-1 p-4 overflow-hidden">
            {/* Code Editor */}
            <div className="w-1/3 pr-4">
              <h3 className="mb-2 text-xl font-semibold text-white">CODE EDITOR</h3>
              <div className="h-[calc(100%-80px)] overflow-auto bg-[#2B2B36] rounded">
                <Editor
                  value={css}
                  onValueChange={setCSS}
                  highlight={code => highlight(code, languages.css)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    backgroundColor: 'transparent',
                    color: '#fff',
                    height: '100%',
                  }}
                />
              </div>
              <div className="flex flex-row mt-2 space-x-2">
                <button
                  className="flex items-center justify-center flex-1 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                  onClick={handleRun}
                >
                  <FaPlay className="mr-2" /> Run
                </button>
                <button
                  className="flex items-center justify-center flex-1 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                  onClick={compareImages}
                >
                  <FaCheck className="mr-2" /> Submit
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="w-1/3 px-4">
              <h3 className="mb-2 text-xl font-semibold text-white">OUTPUT</h3>
              <iframe
                ref={outputRef}
                className="w-full h-[calc(100%-40px)] bg-white rounded"
                title="Output"
                sandbox="allow-scripts"
              />
            </div>

            {/* Target */}
            <div className="w-1/3 pl-4">
              <h3 className="mb-2 text-xl font-semibold text-white">Recreate this target</h3>
              <div className="w-full h-[calc(100%-40px)] bg-gray-200 rounded relative">
                <img src={target.image} alt="Target" className="absolute inset-0 object-contain w-full h-full" />
              </div>
              <div className="mt-4">
                <h4 className="mb-2 text-lg font-semibold text-white">COLORS</h4>
                <div className="flex space-x-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#434B92] rounded mr-2"></div>
                    <span className="text-white">#434B92</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#F3AC3C] rounded mr-2"></div>
                    <span className="text-white">#F3AC3C</span>
                  </div>
                </div>
              </div>
              {comparisonResult !== null && (
                <div className={`mt-4 p-2 rounded ${comparisonResult ? 'bg-green-600' : 'bg-red-600'}`}>
                  {comparisonResult ? (
                    <div className="flex items-center text-white">
                      <FaCheck className="mr-2" /> Match! Great job!
                    </div>
                  ) : (
                    <div className="flex items-center text-white">
                      Not quite. Keep trying!
                    </div>
                  )}
                </div>
              )}
              {score !== null && (
                <div className="p-2 mt-2 bg-blue-600 rounded">
                  <p className="text-white">Score: {score}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TargetModal;