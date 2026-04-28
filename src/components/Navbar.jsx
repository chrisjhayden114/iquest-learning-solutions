import Container from './Container'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Research', href: '#research' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Insights', href: '#insights' },
  { label: 'Partner', href: '#partner' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
      <Container className="py-4">
        <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="text-slate-900 font-semibold tracking-tight">
            i:Quest Learning Solutions
          </a>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
