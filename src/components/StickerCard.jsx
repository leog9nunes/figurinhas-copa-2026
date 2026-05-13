import React from 'react'

export const StickerCard = ({ player, onToggleObtained, onAddRepeated, onRemoveRepeated }) => {
  return (
    <div
      onClick={() => onToggleObtained(player.id)}
      className={`sticker-card p-4 rounded-lg border-2 cursor-pointer transition-all ${
        player.obtained
          ? 'bg-green-100 border-green-500 dark:bg-green-900 dark:border-green-400'
          : 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600'
      }`}
    >
      {/* Número da figurinha */}
      <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
        {player.number}
      </div>

      {/* Flag emoji do país */}
      <div className="text-3xl mb-2">
        {getCountryEmoji(player.team)}
      </div>

      {/* Nome do jogador */}
      <h3 className="font-bold text-gray-900 dark:text-white truncate">
        {player.name}
      </h3>

      {/* Time e posição */}
      <p className="text-xs text-gray-600 dark:text-gray-300">{player.team}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{player.position}</p>

      {/* Status */}
      {player.obtained && (
        <span className="inline-block mt-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          ✓ Obtida
        </span>
      )}

      {/* Contador de repetidas */}
      {player.repeated > 0 && (
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onRemoveRepeated(player.id)
            }}
            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
          >
            −
          </button>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
            {player.repeated}x
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onAddRepeated(player.id)
            }}
            className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            +
          </button>
        </div>
      )}

      {/* Botão para adicionar repetida */}
      {player.obtained && player.repeated === 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onAddRepeated(player.id)
          }}
          className="mt-2 w-full bg-yellow-500 text-white text-xs px-2 py-1 rounded hover:bg-yellow-600"
        >
          Adicionar Repetida
        </button>
      )}
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
