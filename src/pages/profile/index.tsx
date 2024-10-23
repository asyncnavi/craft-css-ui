import React, { useState } from 'react'
import { FaFire, FaBolt, FaTrophy, FaCalendar, FaCog, FaUser, FaChartBar } from 'react-icons/fa'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('basic')
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState('Vansh Dhalor')
  const [bio, setBio] = useState('Full Stack Developer')

  return (
    <div className="min-h-screen font-sans text-gray-300 bg-gray-900">
      {/* Header */}
      <header className="px-6 py-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center px-4 py-2 space-x-3 transition-colors bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600">
            <img src="/path-to-avatar.jpg" alt="Avatar" className="w-8 h-8 border-2 border-blue-400 rounded-full" />
            <span className="font-medium text-white">{username}</span>
          </div>
          <button className="px-6 py-2 text-sm font-medium text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800">
            Claim your username
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <img src="/path-to-large-avatar.jpg" alt={username} className="w-32 h-32 mx-auto border-4 border-blue-400 rounded-full shadow-lg" />
            {isEditing ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-4 text-3xl font-bold text-center text-white bg-transparent border-b border-blue-400 focus:outline-none"
              />
            ) : (
              <h1 className="mt-4 text-3xl font-bold text-white">{username}</h1>
            )}
            {isEditing ? (
              <input
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-2 text-lg text-center text-gray-400 bg-transparent border-b border-blue-400 focus:outline-none"
              />
            ) : (
              <p className="mt-2 text-lg text-gray-400">{bio}</p>
            )}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 mt-4 text-sm font-medium text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              {isEditing ? 'Save' : 'Edit Profile'}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex mb-8 space-x-4 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'basic' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              Basic Info
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'advanced' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              Advanced Stats
            </button>
          </div>

          {activeTab === 'basic' && (
            <>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <StreakCard icon={FaFire} title="Current Streak" value="1 day" />
                <StreakCard icon={FaBolt} title="Longest streak" value="1 day" />
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <StatsSection
                  icon={FaTrophy}
                  title="Battle stats"
                  stats={[
                    { title: "Global rank", value: "0" },
                    { title: "Targets played", value: "0" },
                    { title: "Total score", value: "0.00" },
                  ]}
                />
                <StatsSection
                  icon={FaCalendar}
                  title="Daily targets stats"
                  stats={[
                    { title: "Targets played", value: "1" },
                    { title: "Avg match", value: "95%" },
                    { title: "Avg characters", value: "744" },
                  ]}
                />
              </div>
            </>
          )}

          {activeTab === 'advanced' && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <AdvancedStatsCard icon={FaUser} title="Profile Completion" value="75%" />
              <AdvancedStatsCard icon={FaChartBar} title="Performance Index" value="8.5/10" />
              <AdvancedStatsCard icon={FaCog} title="Skill Level" value="Intermediate" />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

const StreakCard = ({ icon: Icon, title, value }) => (
  <div className="p-6 bg-gray-800 shadow-md rounded-xl">
    <div className="flex items-center justify-between">
      <span className="text-4xl font-bold text-blue-400">{value}</span>
      <Icon className="text-3xl text-blue-400" />
    </div>
    <p className="mt-2 text-sm font-medium text-gray-400">{title}</p>
  </div>
)

const StatsSection = ({ icon: Icon, title, stats }) => (
  <div className="p-6 bg-gray-800 shadow-md rounded-xl">
    <h2 className="flex items-center mb-6 text-xl font-semibold text-white">
      <Icon className="mr-3 text-blue-400" />
      {title}
    </h2>
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  </div>
)

const StatCard = ({ title, value }) => (
  <div className="text-center">
    <p className="text-2xl font-bold text-blue-400">{value}</p>
    <p className="mt-1 text-sm font-medium text-gray-400">{title}</p>
  </div>
)

const AdvancedStatsCard = ({ icon: Icon, title, value }) => (
  <div className="p-6 bg-gray-800 shadow-md rounded-xl">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <Icon className="text-2xl text-blue-400" />
    </div>
    <p className="text-3xl font-bold text-blue-400">{value}</p>
  </div>
)

export default Profile