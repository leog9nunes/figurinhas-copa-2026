import React, { useState } from 'react'
import { Share2, X } from 'lucide-react'

export const ShareModal = ({ stats, players, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  const generateShareText = () => {
    return `🏆 Meu Progresso no Álbum da Copa 2026:\n\n📊 ${stats.obtained}/${stats.total} figurinhas obtidas\n❌ ${stats.missing} faltam\n🔄 ${stats.repeated} repetidas\n✅ ${stats.progress}% completo\n\nConfira minha coleção em: `
  }

  const generateShareCode = () => {
    const obtainedIds = players.filter(p => p.obtained).map(p => p.id).join(',')
    return btoa(obtainedIds) // Codifica em base64
  }

  const handleCopyShareCode = () => {
    const code = generateShareCode()
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareWhatsApp = () => {
    const text = generateShareText()
    const code = generateShareCode()
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + code)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleShareTwitter = () => {
    const text = generateShareText()
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(twitterUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Compartilhar Coleção
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-3">
          {/* WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-semibold flex items-center justify-center gap-2"
          >
            <span>📱</span> Compartilhar no WhatsApp
          </button>

          {/* Twitter */}
          <button
            onClick={handleShareTwitter}
            className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 font-semibold flex items-center justify-center gap-2"
          >
            <span>𝕏</span> Compartilhar no Twitter
          </button>

          {/* Copiar Código */}
          <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Ou copie seu código único para compartilhar:
            </p>
            <button
              onClick={handleCopyShareCode}
              className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {copied ? '✓ Copiado!' : 'Copiar Código'}
            </button>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded text-sm text-gray-700 dark:text-gray-300">
          <p>📊 <strong>{stats.obtained}/{stats.total}</strong> figurinhas</p>
          <p>❌ <strong>{stats.missing}</strong> faltam</p>
          <p>🔄 <strong>{stats.repeated}</strong> repetidas</p>
        </div>
      </div>
    </div>
  )
}
