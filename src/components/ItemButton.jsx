import React from 'react'

export default function ItemButton({svg, color, handleClick}) {
    
    const bgColor = {
        'green': 'hover:bg-green-300',
        'red': 'hover:bg-red-300',
        'yellow': 'hover:bg-yellow-300'
    }
    
  return (
    <button
        className={`rounded-full bg-slate-300 ${bgColor[color]}
        p-1 w-8 hover:w-12 transition-all`}
        onClick={handleClick}
    >
        {svg}
    </button>
  )
}
