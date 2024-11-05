// Leaderboard.tsx
import React from "react";
import NavigationRails from "../../component/navigation-rail";
import { IconBadge } from "@tabler/icons-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  totalScore: number;
  completedTargets: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Navraj", totalScore: 1200, completedTargets: 20 },
  { rank: 2, name: "Vansh", totalScore: 1100, completedTargets: 18 },
  { rank: 3, name: "Madhav", totalScore: 1050, completedTargets: 16 },
  { rank: 4, name: "Kartik", totalScore: 1000, completedTargets: 15 },
  { rank: 5, name: "Palak", totalScore: 950, completedTargets: 14 },
  { rank: 6, name: "Ayushi", totalScore: 900, completedTargets: 13 },
  { rank: 7, name: "Manjinder", totalScore: 850, completedTargets: 12 },
  { rank: 8, name: "Vikas", totalScore: 800, completedTargets: 11 },
  { rank: 9, name: "Kunal", totalScore: 750, completedTargets: 10 },
  { rank: 10, name: "Jasman", totalScore: 700, completedTargets: 9 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="bg-slate-950 w-full min-h-screen text-white flex">
      <NavigationRails />
      <main className="ml-[120px] p-8 flex-grow space-y-4">
        <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb- flex items-center">
            Leaderboard
            <IconBadge className="text-yellow-500" />
          </h2>
          <table className="min-w-full text-left text-gray-300">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4 font-semibold">Rank</th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Total Score</th>
                <th className="py-3 px-4 font-semibold">Completed Targets</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry) => (
                <tr
                  key={entry.rank}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <td className="py-3 px-4">{entry.rank}</td>
                  <td className="py-3 px-4">{entry.name}</td>
                  <td className="py-3 px-4">{entry.totalScore}</td>
                  <td className="py-3 px-4">{entry.completedTargets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
