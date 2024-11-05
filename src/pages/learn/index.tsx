import { Link } from "react-router-dom";
import NavigationRails from "../../component/navigation-rail";
import cssResources from "./resources";

const LearnPage = () => {
  return (
    <div className="bg-slate-950 w-full min-h-screen text-white">
      <NavigationRails />
      <main className="ml-[120px] p-2">
        <div className="w-full flex flex-col gap-4  space-y-5">
          {cssResources.map((res) => {
            return (
              <Link
                to={res.link}
                key={res.id}
                target="_blank"
                className="p-4 rounded-md bg-slate-900 border-slate-900 border hover:border-white transition-all duration-300 ease-in"
              >
                <h1 className="text-lg">{res.title}</h1>
                <p>{res.description}</p>
              </Link>
            );
          })}
        </div>
        {}
      </main>
    </div>
  );
};

export default LearnPage;
