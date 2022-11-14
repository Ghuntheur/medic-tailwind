import clsx from 'clsx'

export default ({ children = '', image = '' }) => (
  <div
    className={clsx(
      'rounded-2xl',
      image ? `bg-[url("${image}")]` : 'bg-primary p-8 text-white'
    )}
  >
    {children}
  </div>
)
