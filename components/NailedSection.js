import clsx from 'clsx'

export const NailedSection = ({ children, position = 'right', className }) => {
  const isLeft = position === 'left'
  const isRight = position === 'right'

  return (
    <section
      className={clsx(
        ['grid', 'grid-cols-[1fr_80%_1fr]', 'l:grid-cols-[1fr_1200px_1fr]'],
        className
      )}
    >
      <div
        className={clsx(
          'bg-slate-500',
          isLeft && 'rounded-r',
          isRight && 'rounded-l',
          'grid',
          isRight && 'col-span-2 col-start-2',
          isLeft && 'col-start-1 col-end-3',
          isLeft && 'l:grid-cols-[1fr_1200px]',
          isRight && 'l:grid-cols-[1200px_1fr]',
          'shadow-[0px_4px_52px_rgba(245,245,245,0.17)]'
        )}
      >
        <div
          className={clsx([
            'px-4 py-10 l:p-14',
            isRight && 'ml-0',
            isLeft && 'mr-0',
            isRight && 'col-start-1',
            isLeft && 'col-start-2',
          ])}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
