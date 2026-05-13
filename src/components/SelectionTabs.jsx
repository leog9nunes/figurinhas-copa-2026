import React from 'react'

export const SelectionTabs = ({ teams, selectedTeam, onTeamChange }) => {
  return (
    <div className="mb-6 overflow-x-auto pb-2">
      <div className="flex gap-2 min-w-max">
        {teams.map((team) => (
          <button
            key={team}
            onClick={() => onTeamChange(team)}
            className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
              selectedTeam === team
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {team === 'Todos' ? '🌍 Todos' : `${getCountryEmoji(team)} ${team}`}
          </button>
        ))}
      </div>
    </div>
  )
}

function getCountryEmoji(country) {
  const flags = {
    Brasil: '🇧🇷',
    Argentina: '🇦🇷',
    França: '🇫🇷',
    Polônia: '🇵🇱',
    Portugal: '🇵🇹',
    Espanha: '🇪🇸',
    Bélgica: '🇧🇪',
    Inglaterra: '🇬🇧',
    Alemanha: '🇩🇪',
    Itália: '🇮🇹',
    Noruega: '🇳🇴',
  }
  return flags[country] || '⚽'
}
