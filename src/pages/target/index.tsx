import React from "react";
import NavigationRails from "../../component/navigation-rail";
import { useGetTargetsQuery } from "../../api";
import { useNavigate } from "react-router";

const Target: React.FC = () => {
  const navigate = useNavigate();
  const { data: targets, isLoading } = useGetTargetsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-slate-950 w-full min-h-screen text-white flex">
      <NavigationRails />

      <main className="ml-[120px] p-8 flex-grow space-y-4">
        <h1 className="text-4xl font-bold mb-4">Exlpore Targets</h1>
        <div className="flex flex-wrap gap-8 ">
          {targets?.map((target) => (
            <div
              className="flex flex-col w-[300px] cursor-pointer border  border-white shadow-[4px_4px_white] rounded p-2 space-y-2 hover:scale-105 transition-all duration-300"
              key={target.id}
              onClick={() => navigate(`/play/${target.id}`)}
            >
              <img src={target.image} alt={`Target ${target.image}`} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Target;
