import clsx from 'clsx'
import React from 'react'

export const Heading = ({ as = 'p', className, ...props }) => {
  const Tag = as

  return (
    <Tag
      className={clsx(
        ['font-title', 'text-m', 'uppercase', 'l:text-l'],
        className
      )}
      {...props}
    />
  )
}
