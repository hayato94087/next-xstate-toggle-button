'use client'

import { toggleMachine } from "@/machines/toggle-machine";
import { useMachine } from "@xstate/react";
import { Power } from 'lucide-react'

export const ToggleButton = () => {
  const [state, send] = useMachine(toggleMachine)
  const isActive = state.matches('active');
  return (
    <>
      <button
        onClick={() => send({ type: "TOGGLE" })}
        className={`w-32 h-16 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          isActive ? 'bg-green-500' : 'bg-gray-300'
        }`}
        aria-label={isActive ? 'Turn off' : 'Turn on'}
      >
        <div
          className={`w-14 h-14 rounded-full transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
            isActive ? 'translate-x-16 bg-white' : 'translate-x-0 bg-gray-100'
          }`}
        >
          <Power className={`w-8 h-8 ${isActive ? 'text-green-500' : 'text-gray-400'}`} />
        </div>
      </button>
      <span className="mt-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
        {isActive ? 'ON' : 'OFF'}
      </span>
      <span className="sr-only">{isActive ? 'The switch is on' : 'The switch is off'}</span>
    </>
  )
}