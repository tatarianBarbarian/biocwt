import clsx from 'clsx'

export const Button = ({ className, ...props }) => {
  const Tag = props.href ? 'a' : 'button'

  return (
    <Tag
      className={clsx(
        [
          'text-3xl',
          'inline-flex',
          'rounded',
          'px-16',
          'py-2',
          'text-gray-100',
          'bg-cloud-400',
          'font-bold',
          'hover:bg-gray',
          'hover:text-wood-600',
          'hover:bg-cloud-200',
        ],
        className
      )}
      {...props}
    />
  )
}
