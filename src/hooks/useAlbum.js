import { useState, useEffect, useCallback } from 'react'
import playersData from '../data/players.json'

const STORAGE_KEY = 'album-players'

export const useAlbum = () => {
  const [players, setPlayers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('Todos')
  const [darkMode, setDarkMode] = useState(false)

  // Carrega dados do localStorage ao montar
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    const darkModePreference = localStorage.getItem('darkMode')
    
    if (savedData) {
      setPlayers(JSON.parse(savedData))
    } else {
      setPlayers(playersData)
    }

    if (darkModePreference) {
      setDarkMode(JSON.parse(darkModePreference))
    }
  }, [])

  // Salva dados sempre que muda
  useEffect(() => {
    if (players.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(players))
    }
  }, [players])

  // Salva preferência de dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleObtained = useCallback((playerId) => {
    setPlayers(prev =>
      prev.map(player =>
        player.id === playerId
          ? { ...player, obtained: !player.obtained }
          : player
      )
    )
  }, [])

  const addRepeated = useCallback((playerId) => {
    setPlayers(prev =>
      prev.map(player =>
        player.id === playerId
          ? { ...player, repeated: player.repeated + 1 }
          : player
      )
    )
  }, [])

  const removeRepeated = useCallback((playerId) => {
    setPlayers(prev =>
      prev.map(player =>
        player.id === playerId && player.repeated > 0
          ? { ...player, repeated: player.repeated - 1 }
          : player
      )
    )
  }, [])

  const getTeams = useCallback(() => {
    const teams = ['Todos', ...new Set(players.map(p => p.team))]
    return teams.sort()
  }, [players])

  const getFilteredPlayers = useCallback(() => {
    return players.filter(player => {
      const matchSearch =
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.team.toLowerCase().includes(searchTerm.toLowerCase())

      const matchTeam =
        selectedTeam === 'Todos' || player.team === selectedTeam

      return matchSearch && matchTeam
    })
  }, [players, searchTerm, selectedTeam])

  const getStats = useCallback(() => {
    const obtained = players.filter(p => p.obtained).length
    const missing = players.length - obtained
    const repeated = players.reduce((sum, p) => sum + p.repeated, 0)

    return {
      total: players.length,
      obtained,
      missing,
      repeated,
      progress: Math.round((obtained / players.length) * 100),
    }
  }, [players])

  const resetAlbum = useCallback(() => {
    if (confirm('Tem certeza? Isso vai limpar todo o seu progresso.')) {
      setPlayers(playersData)
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  return {
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
  }
}
