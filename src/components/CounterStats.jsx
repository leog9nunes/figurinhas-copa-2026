import React from 'react'

export const CounterStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {/* Total */}
      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-gray-600 dark:text-gray-300 text-sm">Total</p>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">
          {stats.total}
        </p>
      </div>

      {/* Obtidas */}
      <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
        <p className="text-gray-600 dark:text-gray-300 text-sm">Obtidas</p>
        <p className="text-3xl font-bold text-green-600 dark:text-green-300">
          {stats.obtained}
        </p>
      </div>

      {/* Faltam */}
      <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
        <p className="text-gray-600 dark:text-gray-300 text-sm">Faltam</p>
        <p className="text-3xl font-bold text-red-600 dark:text-red-300">
          {stats.missing}
        </p>
      </div>

      {/* Repetidas */}
      <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
        <p className="text-gray-600 dark:text-gray-300 text-sm">Repetidas</p>
        <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-300">
          {stats.repeated}
        </p>
      </div>

      {/* Progresso */}
      <div className="col-span-2 md:col-span-4 bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Progresso</p>
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="bg-purple-600 dark:bg-purple-400 h-full transition-all duration-300"
            style={{ width: `${stats.progress}%` }}
          ></div>
        </div>
        <p className="text-right text-sm font-bold text-purple-600 dark:text-purple-300 mt-2">
          {stats.progress}%
        </p>
      </div>
    </div>
  )
}
