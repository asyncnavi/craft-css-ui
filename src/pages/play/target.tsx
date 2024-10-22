import { FC } from "react";

type TargetScreenProps = {
  imageUrl: string;
  colors: string[];
};

const TargetScreen: FC<TargetScreenProps> = ({ colors, imageUrl }) => {
  return (
    <div className="p-2">
      <h1 className="bg-slate-900 py-1 px-2">Recreate this target</h1>
      <img
        src={imageUrl}
        className="w-[400px] h-[300px] mx-auto bg-white my-4"
      />
      <h2 className="py-1 px-2 uppercase">Colors</h2>
      <div className="flex items-center gap-2">
        {colors.map((color) => {
          return (
            <div className="flex border-2 border-white w-max px-2 py-1 rounded-md items-center cursor-pointer hover:scale-105">
              <div
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span>{color} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TargetScreen;
