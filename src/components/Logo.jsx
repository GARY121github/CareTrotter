import React from 'react'

const Logo = ({ className }) => {
  return (
    <img src='/images/logo.png' className={`h-10 w-10 ${className}`} />
  )
}

export default Logo