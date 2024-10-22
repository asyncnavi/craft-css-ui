import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import TargetModal from './Modals';

const allTargets = [
  { id: 1, date: 'OCT 1', image: 'img/test1.png', score: 'Not played', isPlus: true },
  { id: 2, date: 'OCT 2', image: 'img/test2.png', score: 'Not played', isPlus: true },
  { id: 3, date: 'OCT 3', image: 'img/test3.png', score: 'played', isPlus: true },
  { id: 4, date: 'OCT 4', image: 'img/test4.png', score: 'Not played', isPlus: true },
  { id: 5, date: 'OCT 5', image: 'img/test5.png', score: 'Not played', isPlus: true },
  { id: 6, date: 'OCT 6', image: 'img/test6.png', score: 'Not played', isPlus: true },
  { id: 7, date: 'OCT 7', image: 'img/test7.png', score: 'Not played', isPlus: true },
  { id: 8, date: 'OCT 8', image: 'img/test8.png', score: 'Not played', isPlus: true },
  { id: 9, date: 'OCT 9', image: 'img/test9.png', score: 'Not played', isPlus: true },
  { id: 10, date: 'OCT 10', image: 'img/test10.png', score: 'Not played', isPlus: true },
  { id: 11, date: 'OCT 11', image: 'img/test11.png', score: 'Not played', isPlus: true },
  { id: 12, date: 'OCT 12', image: 'img/test12.png', score: 'Not played', isPlus: true },
  { id: 13, date: 'OCT 13', image: 'img/test13.png', score: 'Not played', isPlus: true },
  { id: 14, date: 'OCT 14', image: 'img/test14.png', score: 'Not played', isPlus: true },
]

const filters = ['All', 'Not played', 'Played']

const Targets = () => {
  const [currentMonth] = useState('October 2024')
  const [filter, setFilter] = useState('All')
  const [searchTerm] = useState('')
  const controls = useAnimation()
  const [selectedTarget, setSelectedTarget] = useState(null)

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  const filteredTargets = allTargets.filter(target => 
    (filter === 'All' || 
    (filter === 'Played' && target.score !== 'Not played') ||
    (filter === 'Not played' && target.score === 'Not played')) &&
    target.date.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleTargetClick = (target) => {
    setSelectedTarget(target)
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/space-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/30 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="container relative px-4 py-16 mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="mb-12 text-5xl text-center"
        >
          <span className="font-light">Daily</span> <span className="font-normal">Targets</span>
        </motion.h1>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {filters.map((f, index) => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4 py-2 overflow-hidden text-sm font-medium tracking-wider transition-all duration-300 ease-in-out sm:px-6 sm:py-3"
                onClick={() => setFilter(f)}
              >
                <span className={`relative z-10 ${
                  filter === f ? 'text-white' : 'text-gray-400'
                }`}>
                  {f.toUpperCase()}
                </span>
                <motion.div
                  className="absolute inset-0 bg-blue-600"
                  initial={false}
                  animate={{
                    clipPath: filter === f
                      ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      : 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Month Navigation */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          <button className="text-gray-400 hover:text-white"><FaChevronLeft /></button>
          <h2 className="text-xl font-semibold">{currentMonth}</h2>
          <button className="text-gray-400 hover:text-white"><FaChevronRight /></button>
        </div>

        {/* Targets Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-7 gap-4"
        >
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} className="font-semibold text-center text-gray-500">
              {day}
            </div>
          ))}
          {filteredTargets.map((target, index) => (
            <motion.div 
              key={target.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg cursor-pointer"
              onClick={() => handleTargetClick(target)}
            >
              <div className="w-full h-24 mb-2 overflow-hidden bg-gray-700 rounded-md">
                <img 
                  src={target.image} 
                  alt={`Target for ${target.date}`} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-sm text-gray-400">{target.date}</div>
              <div className="text-sm">{target.score}</div>
              {target.isPlus && (
                <span className="px-1 mt-1 text-xs text-black bg-yellow-500 rounded">PLUS</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredTargets.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-xl text-center text-gray-400"
          >
            No targets found. Try adjusting your search or filter.
          </motion.p>
        )}

        {/* Target Modal */}
        {selectedTarget && (
          <TargetModal
            target={selectedTarget}
            onClose={() => setSelectedTarget(null)}
          />
        )}
      </div>
    </div>
  )
}

export default Targets