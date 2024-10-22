import { forwardRef } from "react";

type OutputScreenProps = {
  code: string;
};

const OutputScreen = forwardRef<HTMLIFrameElement, OutputScreenProps>(
  ({ code }, ref) => {
    return (
      <div>
        <h1 className="bg-slate-900 py-1 px-2 uppercase">Output</h1>
        <iframe
          className="w-[400px] h-[300px] mx-auto bg-white my-4"
          srcDoc={code}
          title="code-output"
          ref={ref}
        />
      </div>
    );
  },
);

OutputScreen.displayName = "OutputScreen";

export default OutputScreen;
