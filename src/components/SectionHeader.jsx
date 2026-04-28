function SectionHeader({ title, intro, centered = false }) {
  return (
    <div className={centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {intro ? <p className="mt-6 text-slate-600 leading-relaxed text-lg">{intro}</p> : null}
    </div>
  )
}

export default SectionHeader
