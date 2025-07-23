import React from 'react'

const Button = ({ title, leftIcon, containerClass, id,rightIcon }) => {
  return (
    <div id={id} className={` group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black  ${containerClass}`}>
     {leftIcon}
     <span className='relative inline-flex font-general overflow-hidden text-xs uppercase'>
      <div>{title}</div>
     </span>
     {rightIcon}
    </div>
  )
}

export default Button