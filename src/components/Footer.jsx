import Container from './Container'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Approach', '#approach'],
  ['Research', '#research'],
  ['Use Cases', '#use-cases'],
  ['Insights', '#insights'],
  ['Partner', '#partner'],
]

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">i:Quest Learning Solutions</p>
          <p className="mt-2 text-sm text-slate-600">
            Making implementation clear, visible, and continuously improvable.
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 text-sm text-slate-600">
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} className="transition hover:text-slate-900">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}

export default Footer
