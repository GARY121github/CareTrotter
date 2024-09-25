import React from 'react'
import Logo from './components/Logo'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#151719]'>
      <Logo className="h-72 w-72 rounded-full p-5" />
      <div className="waviy text-6xl mt-6 ">
        <span style={{ '--i': 1 }}>c</span>
        <span style={{ '--i': 2 }}>o</span>
        <span style={{ '--i': 3 }}>m</span>
        <span style={{ '--i': 4 }}>i</span>
        <span style={{ '--i': 5 }}>n</span>
        <span style={{ '--i': 6 }}>g</span>
        <span style={{ '--i': 7 }}>s</span>
        <span style={{ '--i': 8 }}>o</span>
        <span style={{ '--i': 9 }}>o</span>
        <span style={{ '--i': 10 }}>n</span>
      </div>
    </div>
  )
}


export default App