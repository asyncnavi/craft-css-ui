import { IconArrowLeft, IconPlayerPlay } from "@tabler/icons-react";
import { FC } from "react";

type TopBarProps = {
  onSubmit: () => void;
};

const TopBar: FC<TopBarProps> = ({ onSubmit }) => {
  return (
    <div className="w-full border-b border-b-white flex items-center gap-2 py-4 px-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="cursor-pointer bg-slate-900 rounded-full p-2">
          <IconArrowLeft />
        </div>
        <h1 className="underline text-lg cursor-pointer">
          Problem : Shaky Circle
        </h1>
      </div>

      <button
        onClick={() => onSubmit()}
        className="bg-violet-900 px-4 py-2 rounded-full text-xl flex items-center gap-2"
      >
        {" "}
        Submit
        <IconPlayerPlay size={18} />
      </button>
    </div>
  );
};

export default TopBar;
