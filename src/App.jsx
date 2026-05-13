import React, { useState } from 'react'
import { Moon, Sun, Share2, RotateCcw } from 'lucide-react'
import { useAlbum } from './hooks/useAlbum'
import { SearchBar } from './components/SearchBar'
import { SelectionTabs } from './components/SelectionTabs'
import { CounterStats } from './components/CounterStats'
import { StickerCard } from './components/StickerCard'
import { ShareModal } from './components/ShareModal'

export default function App() {
  const {
    players,
    searchTerm,
    setSearchTerm,
    selectedTeam,
    setSelectedTeam,
    darkMode,
    setDarkMode,
    toggleObtained,
    addRepeated,
    removeRepeated,
    getTeams,
    getFilteredPlayers,
    getStats,
    resetAlbum,
  } = useAlbum()

  const [shareModalOpen, setShareModalOpen] = useState(false)

  const stats = getStats()
  const teams = getTeams()
  const filteredPlayers = getFilteredPlayers()

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  ⚽ Copa 2026
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Álbum de Figurinhas Interativo
                </p>
              </div>

              <div className="flex gap-3">
                {/* Botão de Compartilhar */}
                <button
                  onClick={() => setShareModalOpen(true)}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-semibold transition-colors"
                >
                  <Share2 size={20} />
                  <span className="hidden sm:inline">Compartilhar</span>
                </button>

                {/* Botão Dark Mode */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Botão Reset */}
                <button
                  onClick={resetAlbum}
                  className="p-2 rounded-lg bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-100 hover:bg-red-300 dark:hover:bg-red-800 transition-colors"
                  title="Resetar álbum"
                >
                  <RotateCcw size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Estatísticas */}
          <CounterStats stats={stats} />

          {/* Busca */}
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {/* Abas de Seleção */}
          <SelectionTabs
            teams={teams}
            selectedTeam={selectedTeam}
            onTeamChange={setSelectedTeam}
          />

          {/* Grid de Figurinhas */}
          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredPlayers.map((player) => (
                <StickerCard
                  key={player.id}
                  player={player}
                  onToggleObtained={toggleObtained}
                  onAddRepeated={addRepeated}
                  onRemoveRepeated={removeRepeated}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Nenhuma figurinha encontrada
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 dark:text-gray-400">
            <p>⚽ Colecionador de Figurinhas da Copa 2026 © 2026</p>
            <p className="text-sm mt-2">Desenvolvido com ❤️ por Léo</p>
          </div>
        </footer>

        {/* Share Modal */}
        <ShareModal
          stats={stats}
          players={players}
          isOpen={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
        />
      </div>
    </div>
  )
}
