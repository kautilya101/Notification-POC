import React from 'react'
import { PawPrint } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PawPrint className='w-10 h-10 ' color='red'/>
          <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-lg flex gap-3">
            Paws 
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-gray-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm">
            JD
          </div>
        </div>
      </div>
    </nav>
  )
}
