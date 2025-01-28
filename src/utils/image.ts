import html2canvas from "html2canvas";
import resemble from "resemblejs";

export const loadImage = (src: string): Promise<HTMLCanvasElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous"; // Add CORS support if needed
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

export const getScreenshotFromIframe = async (
  iframe: HTMLIFrameElement | null,
): Promise<string | null> => {
  if (!iframe) return null;

  const iframeDocument = iframe.contentWindow?.document.body;
  if (!iframeDocument) return null;

  const canvas = await html2canvas(iframeDocument, {
    useCORS: true,
    logging: false,
  });
  return canvas.toDataURL("image/png"); // Return screenshot as base64 PNG
};

export const compareImages = (
  image1: string,
  image2: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    resemble(image1)
      .compareTo(image2)
      .onComplete((data) => {
        if (data && typeof data.misMatchPercentage === "number") {
          resolve(data.misMatchPercentage); // Directly resolve the mismatch percentage
        } else {
          reject(new Error("Error in comparison"));
        }
      });
  });
};
