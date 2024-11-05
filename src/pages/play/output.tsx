import { IconFlame, IconPercentage } from "@tabler/icons-react";
import { forwardRef } from "react";

type OutputScreenProps = {
  code: string;
  score: string;
  percentangeMatched: string;
};

const OutputScreen = forwardRef<HTMLIFrameElement, OutputScreenProps>(
  ({ code, score, percentangeMatched }, ref) => {
    return (
      <div>
        <h1 className="bg-slate-900 py-1 px-2 uppercase">Output</h1>
        <iframe
          className="w-[400px] h-[300px] mx-auto bg-white my-4"
          srcDoc={code}
          title="code-output"
          ref={ref}
        />
        <div className="p-2">
          <h2 className="py-1 px-2 uppercase flex gap-2">
            Current Score <IconFlame className="text-red-500" />
            <span>{score}</span>
          </h2>
          <h2 className="py-1 px-2 uppercase flex gap-2">
            Matched Percentage <IconPercentage className="text-red-500" />
            <span>{percentangeMatched}</span>
          </h2>
        </div>
      </div>
    );
  },
);

OutputScreen.displayName = "OutputScreen";

export default OutputScreen;
