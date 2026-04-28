function Card({ title, children, className = '' }) {
  return (
    <article
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm p-7 transition duration-300 hover:shadow-md hover:-translate-y-[2px] ${className}`}
    >
      {title ? <h3 className="text-xl font-semibold text-slate-900">{title}</h3> : null}
      <div className="mt-3 text-slate-600 leading-relaxed">{children}</div>
    </article>
  )
}

export default Card
