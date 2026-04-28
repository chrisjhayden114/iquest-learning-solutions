function CTAButton({ children, href = '#', variant = 'primary' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:bg-slate-800'
      : 'border border-slate-300 text-slate-800 bg-white hover:bg-slate-50'

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  )
}

export default CTAButton
