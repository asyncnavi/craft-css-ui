import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import TargetModal from './Modals';

interface Target {
  id: number;
  image: string;
  colors: string;
  date?: string;
  isPlus?: boolean;
}

const allTargets: Target[] = [
  { id: 1,  image: 'img/test1.png', colors: '[#3F4869][#F4DA64][#E25C57]'},
  { id: 2,  image: 'img/test2.png', colors: '[#6B7CBE][#ABC497][#FFFEFE]'},
  { id: 3, image: 'img/test3.png', colors: '[#FADE8B][#594C94]' },
  { id: 4,  image: 'img/test4.png', colors: '[#E6E9E3][#61A74E][#33572B]'},
  { id: 5,  image: 'img/test5.png', colors: '[#3F4869][#61A74E][#242A42]'},
  { id: 6, image: 'img/test6.png', colors: '[#434B92][#EAC049]'},
  { id: 7,  image: 'img/test7.png', colors: '[#6592CF][#243D83]'},
  { id: 8, image: 'img/test8.png', colors: '[#8AB8B6][#D96C7B][#F3EAD2]'},
  { id: 9,  image: 'img/test9.png', colors: '[#b5e0ba][#5d3a3a]'},
  { id: 10, image: 'img/test10.png', colors: '[#62306D][#AA445F][#E38F66]'},
  { id: 11, image: 'img/test11.png', colors: '[#6592CF][#243D83][#EEB850]'},
  { id: 12,  image: 'img/test12.png', colors: '[#3F4869][#61A74E]'},
  { id: 13,  image: 'img/test13.png', colors: '[#61A74E][#F7F3D7]'},
  { id: 14,  image: 'img/test14.png', colors: '[#434B92][#434B92]'},
]

const filters = ['All', 'Regular', 'Plus']

const Targets: React.FC = () => {
  const [currentMonth] = useState('October 2024')
  const [filter, setFilter] = useState('All')
  const [searchTerm] = useState('')
  const controls = useAnimation()
  const [selectedTarget, setSelectedTarget] = useState<Target | null>(null)

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  const filteredTargets = allTargets.filter(target => 
    (filter === 'All' || 
    (filter === 'Regular' && !target.isPlus) ||
    (filter === 'Plus' && target.isPlus)) &&
    (target.date?.toLowerCase().includes(searchTerm.toLowerCase()) ?? true)
  )

  const handleTargetClick = (target: Target) => {
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
                  alt={`Target ${target.id}`} 
                  className="object-cover w-full h-full"
                />
              </div>
              {target.date && <div className="text-sm text-gray-400">{target.date}</div>}
              <div className="text-sm">{target.colors}</div>
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