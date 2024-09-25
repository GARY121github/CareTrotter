import React from 'react'
import Logo from './components/Logo'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Logo className="h-72 w-72" />
      <h1 className='text-5xl font-bold text-blue-700'>Coming Soon</h1>
    </div>
  )
}

export default App