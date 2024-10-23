import React from 'react';
import { motion } from 'framer-motion';

const challenges = [
  { id: 1, title: "Totally Triangle", difficulty: "Easy", participants: 1234, imageUrl: "/img/test1.png" },
  { id: 2, title: "Carrom", difficulty: "Medium", participants: 987, imageUrl: "/img/test3.png" },
  { id: 3, title: "Push Button", difficulty: "Hard", participants: 567, imageUrl: "/img/test13.png" },
  { id: 4, title: "Ups n Downs", difficulty: "Medium", participants: 890, imageUrl: "/img/test14.png" },
];

const Trending: React.FC = () => {
  return (
    <section className="py-8 mt-12">
      <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">Trending Challenges</h2>
      <motion.div 
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 lg:gap-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {challenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            className="overflow-hidden transition-all duration-300 transform bg-slate-800 rounded-xl hover:shadow-lg hover:-translate-y-1"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative pb-[75%] sm:pb-[100%] overflow-hidden group">
              <img
                src={challenge.imageUrl}
                alt={challenge.title}
                className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-50">
                <motion.button
                  className="px-4 py-2 text-sm font-semibold text-white transition-opacity duration-300 bg-purple-600 rounded-full opacity-0 sm:px-6 sm:text-base group-hover:opacity-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Play Now
                </motion.button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-bold text-white">{challenge.title}</h3>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  challenge.difficulty === 'Easy' ? 'bg-green-500' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}>
                  {challenge.difficulty}
                </span>
                <span className="text-xs text-gray-300">{challenge.participants} participants</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Trending;