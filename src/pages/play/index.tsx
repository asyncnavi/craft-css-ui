import dedent from "dedent";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import CodeEditor from "../../editor";
import OutputScreen from "./output";
import TargetScreen from "./target";
import TopBar from "./top-bar";

// Helper function to load the target image and return a canvas
const loadImage = (src: string): Promise<HTMLCanvasElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve(canvas);
      } else {
        reject("Could not get canvas context");
      }
    };
    img.onerror = (err) => reject(err);
  });
};

const PlayGround = () => {
  const [code, setCode] = useState(
    dedent`<div></div>
    <style>
      div {
        width: 100px;
        height: 100px;
        background: #dd6b4d;
      }
    </style>`,
  );

  const iframeRef = useRef<HTMLIFrameElement>(null); // Ref for iframe

  const compareImg = async () => {
    const iframe = iframeRef.current;

    if (!iframe) return; // Ensure iframe exists

    // Capture the content of the iframe
    const iframeDocument = iframe.contentWindow?.document.body;
    if (!iframeDocument) return;

    const canvasGenerated = await html2canvas(iframeDocument);
    const generatedImageData = canvasGenerated
      .getContext("2d")
      ?.getImageData(0, 0, canvasGenerated.width, canvasGenerated.height);

    if (!generatedImageData) return; // Ensure image data is captured

    // Load the target image
    const targetCanvas = await loadImage("/sample.png");
    const targetImageData = targetCanvas
      .getContext("2d")
      ?.getImageData(0, 0, targetCanvas.width, targetCanvas.height);

    if (!targetImageData) return; // Ensure target image is loaded

    // Prepare a canvas for the diff image
    const diffCanvas = document.createElement("canvas");
    diffCanvas.width = targetCanvas.width;
    diffCanvas.height = targetCanvas.height;
    const diffContext = diffCanvas.getContext("2d");
    const diffImageData = diffContext?.createImageData(
      targetCanvas.width,
      targetCanvas.height,
    );

    // Compare images using pixelmatch
    const numDiffPixels = pixelmatch(
      targetImageData.data, // Target image data
      generatedImageData.data, // Generated image data
      diffImageData?.data || new Uint8ClampedArray(), // Diff data to be filled
      targetCanvas.width,
      targetCanvas.height,
      { threshold: 0.1 },
    );

    console.log(`Number of different pixels: ${numDiffPixels}`);
    const totalPixels = targetCanvas.width * targetCanvas.height;
    const numMatchedPixels = totalPixels - numDiffPixels;
    const percentageMatch = (numMatchedPixels / totalPixels) * 100;

    console.log(`Percentage of matched pixels: ${percentageMatch.toFixed(2)}%`);
    if (diffContext && diffImageData) {
      diffContext.putImageData(diffImageData, 0, 0);
      document.body.appendChild(diffCanvas);
    }
  };

  return (
    <div className="bg-slate-950 w-full min-h-screen text-white font-['Jetbrains Mono']">
      <TopBar onSubmit={compareImg} />
      <div className="grid grid-cols-3">
        {/* Code Editor Section */}
        <div className="border-2 border-white ">
          <h1 className="bg-slate-900 py-1 px-2 font-bold uppercase">
            Code Editor
          </h1>
          <CodeEditor onValueChange={setCode} code={code} />
        </div>

        {/* Output Section */}
        <div className="border-2 border-white font-bold">
          <OutputScreen ref={iframeRef} code={code} />
        </div>

        {/* Target Image Section */}
        <div className="border-2 border-white font-bold">
          <TargetScreen
            imageUrl="/sample.png"
            colors={["#434B92", "#F3AC3C"]}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
