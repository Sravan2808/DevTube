import React from 'react'

const Button = ({name,key}) => {
  return (
    <div>
        <button key={key} className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{name}</button>
      
    </div>
  )
}

export default Button
