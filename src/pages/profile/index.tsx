import React from "react";
import NavigationRails from "../../component/navigation-rail";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TextField } from "../../ui/input";
import {
  IconFlame,
  IconStretching,
  IconTargetArrow,
} from "@tabler/icons-react";

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="bg-slate-950 w-full min-h-screen text-white flex">
      <NavigationRails />
      <main className="ml-[120px] p-8 flex-grow space-y-4">
        <h1 className="text-4xl font-bold mb-4">Profile</h1>

        {/* User Info Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold mb-2">Basic Information</h2>
          <div className="mb-2">
            <TextField
              label="Name"
              value={user?.displayName || "N/A"}
              disabled
            />
          </div>
          <div className="mb-2">
            <TextField label="Email" value={user?.email || "N/A"} disabled />
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold mb-2">Stats</h2>
          <div className="flex gap-4">
            <div className="border border-white  p-4 rounded-md flex flex-col items-center w-[200px] gap-2">
              <span className="font-bold text-5xl">
                <IconStretching size={60} className="text-red-500" />
              </span>
              1020 / Total Scores
            </div>
            <div className="border border-white  p-4 rounded-md flex flex-col items-center w-[200px] gap-2">
              <IconTargetArrow size={60} className="text-teal-500" />
              10 Completed
            </div>

            <div className="border border-white  p-4 rounded-md flex flex-col items-center w-[200px] gap-2">
              <span className="font-bold text-5xl">
                <IconFlame size={60} className="text-yellow-500" />
              </span>
              2 Days
            </div>
          </div>
        </div>

        <button className="bg-red-900 px-10 py-4 rounded-full text-xl">
          {" "}
          Logout
        </button>
      </main>
    </div>
  );
};

export default Profile;
