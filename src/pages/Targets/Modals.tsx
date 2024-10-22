import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaCheck } from 'react-icons/fa';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';

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
  const [code, setCode] = useState('');
  const outputRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleCompile = () => {
    if (outputRef.current) {
      const htmlContent = `
        <html>
          <head>
            <style>${code}</style>
          </head>
          <body>
            <div id="output">
              <div class="shape"></div>
            </div>
          </body>
        </html>
      `;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      outputRef.current.src = url;

      // Clean up the object URL after the iframe has loaded
      outputRef.current.onload = () => URL.revokeObjectURL(url);
    }
  };

  useEffect(() => {
    handleCompile();
  }, [code]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden bg-gray-900 rounded-lg shadow-2xl"
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
          <div className="flex h-full">
            {/* Code Editor */}
            <div className="w-1/3 p-4 border-r border-gray-700">
              <h3 className="mb-2 text-xl font-semibold text-white">CODE EDITOR</h3>
              <div className="h-[calc(100%-80px)] overflow-auto bg-gray-800 border border-gray-700 rounded">
                <Editor
                  value={code}
                  onValueChange={setCode}
                  highlight={code => highlight(code, languages.css)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    backgroundColor: 'transparent',
                    color: '#fff',
                  }}
                  className="h-full"
                />
              </div>
              <div className="flex flex-row mt-2 space-x-2">
  <button
    className="flex items-center flex-1 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
    onClick={handleCompile}
  >
    <FaPlay className="mr-2" /> Run
  </button>
  <button
    className="flex items-center flex-1 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
    onClick={handleCompile} // You'll need to implement this function
  >
    <FaCheck className="mr-2" /> Submit
  </button>
</div>
            </div>

            {/* Output */}
            <div className="w-1/3 p-4 border-r border-gray-700">
              <h3 className="mb-2 text-xl font-semibold text-white">OUTPUT</h3>
              <iframe
                ref={outputRef}
                className="w-full h-[calc(100%-40px)] bg-white rounded"
                title="CSS Output"
                sandbox="allow-scripts"
              />
            </div>

            {/* Target Image */}
            <div className="w-1/3 p-4">
              <h3 className="mb-2 text-xl font-semibold text-white">Recreate this target</h3>
              <img src={target.image} alt="Target" className="w-full rounded" />
              <div className="mt-4">
                {/* <h4 className="mb-2 text-lg font-semibold text-white">COLORS</h4> */}
                <div className="flex space-x-2">
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TargetModal;