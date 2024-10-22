

const LeaderboardData = [
  { username: 'Navraj', rank: 1, score: 10000, targetsCompleted: 500 },
  { username: 'Vansh', rank: 2, score: 9500, targetsCompleted: 480 },
  { username: 'Madhav', rank: 3, score: 9000, targetsCompleted: 450 },
  { username: 'Vinay', rank: 4, score: 8500, targetsCompleted: 425 },
  { username: 'kartik', rank: 5, score: 8000, targetsCompleted: 400 },
];

const Board = () => {
  return (
    <div className="min-h-screen p-8 text-white bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">
          Elite Sharpshooter Leaderboard
        </h1>
        <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
          <div className="px-6 py-4 bg-gray-700">
            <h2 className="text-xl font-semibold">Top Performers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-left text-gray-300 uppercase">Rank</th>
                  <th className="px-6 py-3 text-xs font-medium text-left text-gray-300 uppercase">Player</th>
                  <th className="px-6 py-3 text-xs font-medium text-left text-gray-300 uppercase">Score</th>
                  <th className="px-6 py-3 text-xs font-medium text-left text-gray-300 uppercase">Targets</th>
                </tr>
              </thead>
              <tbody>
                {LeaderboardData.map((player, index) => (
                  <tr key={player.rank} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="px-6 py-4">
                      <span className={`inline-block w-8 h-8 rounded-full text-center leading-8 font-bold ${
                        index === 0 ? 'bg-yellow-500 text-gray-900' :
                        index === 1 ? 'bg-gray-400 text-gray-900' :
                        index === 2 ? 'bg-yellow-600 text-gray-900' : 'bg-gray-600 text-white'
                      }`}>
                        {player.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">{player.username}</td>
                    <td className="px-6 py-4">
                      <div>{player.score.toLocaleString()}</div>
                      <div className="w-full h-2 mt-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full" 
                          style={{ width: `${(player.score / LeaderboardData[0].score) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{player.targetsCompleted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;