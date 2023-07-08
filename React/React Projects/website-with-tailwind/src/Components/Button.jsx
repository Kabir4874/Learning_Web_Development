import React from 'react'

const Button = ({classes, text}) => {
  return (
    <button className={`bg-black text-white py-3 px-4 rounded ${classes}`}>{text}</button>
  )
}

export default Button