import { useState } from 'react'
import Card from './components/Card'
import CTAButton from './components/CTAButton'
import Container from './components/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SectionHeader from './components/SectionHeader'

const approachItems = [
  ['Core Value Proposition', 'Helping organizations make implementation clear, visible, and continuously improvable'],
  ['Implementation Science Engine', 'Translates initiatives into clear actions and practices'],
  ['AI-Powered Diagnosis', 'Identifies where implementation breaks down and why'],
  ['Implementation Design', 'Aligns strategies to real challenges'],
  ['AI-Supported System', 'Provides ongoing analytical support'],
  ['Implementation Tracking', 'Makes implementation visible in real time'],
  ['Continuous Improvement', 'Supports iterative improvement cycles'],
  ['Knowledge System', 'Builds learning across contexts'],
  ['Human + AI Model', 'Combines expertise with scalable analysis'],
  ['User Experience', 'Simplifies complexity into actionable insight'],
  ['Value Chain', 'Supports implementation from planning through improvement'],
  ['Business Model', 'Supports partnerships and collaborative pilots'],
  ['Differentiators', 'Focus on implementation quality rather than strategy alone'],
  ['Client Journey', 'Define -> Diagnose -> Design -> Implement -> Improve'],
]

function App() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section id="home" className="py-32">
          <Container className="fade-up">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Making implementation clear, visible, and continuously improvable.
            </p>
            <h1 className="mt-8 max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight">
              Make Your Initiatives Work as Intended
            </h1>
            <p className="mt-8 max-w-3xl text-slate-600 leading-relaxed text-lg">
              Most initiatives fail during implementation—not design. i:Quest Learning Solutions helps
              organizations ensure that what they plan actually happens, and improves over time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="#approach">Explore Our Approach</CTAButton>
              <CTAButton href="#partner" variant="secondary">
                Partner With Us
              </CTAButton>
            </div>
          </Container>
        </section>

        <section className="py-24 border-y border-slate-200 bg-white">
          <Container className="fade-up delay-100">
            <SectionHeader
              title="Move from Assumption to Implementation Intelligence"
              centered
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <Card title="WITHOUT THIS APPROACH">
                <ul className="space-y-3">
                  <li>We assume implementation is happening</li>
                  <li>We discover problems too late</li>
                  <li>We don’t know why initiatives fail</li>
                </ul>
              </Card>
              <Card title="WITH THIS APPROACH">
                <ul className="space-y-3">
                  <li>We define what must happen clearly</li>
                  <li>We see implementation as it unfolds</li>
                  <li>We identify and address issues early</li>
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        <section className="py-24">
          <Container className="fade-up delay-200">
            <div className="grid gap-6 md:grid-cols-3">
              <Card title="Clarity">Define what successful implementation actually looks like</Card>
              <Card title="Visibility">See whether implementation is happening consistently</Card>
              <Card title="Control">Improve implementation before outcomes fail</Card>
            </div>
            <p className="mt-8 text-slate-600 leading-relaxed text-lg">
              Move from hoping initiatives work to knowing how implementation is progressing.
            </p>
          </Container>
        </section>

        <section id="about" className="py-24 bg-white border-y border-slate-200">
          <Container>
            <SectionHeader
              title="Why Implementation Needs a Better System"
              intro="Organizations invest heavily in new strategies, programs, and initiatives. Yet the most important question is often left unanswered: is the initiative actually being implemented as intended?"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card title="The Problem">
                Implementation is often inconsistent, invisible, and only evaluated after outcomes fail.
              </Card>
              <Card title="Our Focus">
                i:Quest Learning Solutions focuses on implementation itself: what should happen, what is
                happening, and what conditions are shaping success.
              </Card>
              <Card title="What We Are Building">
                We are developing AI-supported systems that help organizations clarify, monitor, and
                improve implementation over time.
              </Card>
            </div>
            <p className="mt-8 text-sm text-slate-500">
              This work is currently in development and refinement.
            </p>
          </Container>
        </section>

        <section id="approach" className="py-24">
          <Container>
            <SectionHeader
              title="Our Approach"
              intro="i:Quest Learning Solutions combines research-informed implementation practices with AI-supported analysis to help organizations manage implementation as a system."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {approachItems.map(([title, text]) => (
                <Card key={title} title={title}>
                  {text}
                </Card>
              ))}
              <Card
                title="Conceptual Model"
                className="border-slate-300 bg-slate-900 text-slate-100 md:col-span-2 lg:col-span-3"
              >
                <p className="text-slate-100 text-lg">
                  Implementation Success = f (Key Elements × Context × Fidelity × Time)
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <section id="research" className="py-24 bg-white border-y border-slate-200">
          <Container>
            <SectionHeader
              title="Research-Informed Foundations"
              intro="The approach at i:Quest Learning Solutions draws on established research in implementation, organizational change, and improvement science."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card title="Implementation Science">
                Focuses on how initiatives are enacted and sustained
              </Card>
              <Card title="Organizational Change">
                Explains how context and systems influence outcomes
              </Card>
              <Card title="Improvement Science">
                Supports iterative learning and refinement
              </Card>
            </div>
          </Container>
        </section>

        <section id="use-cases" className="py-24">
          <Container>
            <SectionHeader title="Where This Approach Applies" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card title="Education">
                <p>
                  <span className="font-medium text-slate-800">Problem:</span> Inconsistent implementation
                  across classrooms
                </p>
                <p className="mt-2">
                  <span className="font-medium text-slate-800">Outcome:</span> Greater consistency and
                  clarity
                </p>
              </Card>
              <Card title="Corporate">
                <p>
                  <span className="font-medium text-slate-800">Problem:</span> Strategy fails between
                  leadership and execution
                </p>
                <p className="mt-2">
                  <span className="font-medium text-slate-800">Outcome:</span> Improved execution and
                  reduced risk
                </p>
              </Card>
              <Card title="Nonprofit / Public Sector">
                <p>
                  <span className="font-medium text-slate-800">Problem:</span> Programs vary across contexts
                </p>
                <p className="mt-2">
                  <span className="font-medium text-slate-800">Outcome:</span> More reliable delivery and
                  learning
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <section id="insights" className="py-24 bg-white border-y border-slate-200">
          <Container>
            <SectionHeader title="Insights" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card title="Why Good Strategies Fail in Practice">
                Most strategy issues surface in execution where clarity, consistency, and feedback are weak.
                <p className="mt-3 text-sm text-slate-500">Coming soon</p>
              </Card>
              <Card title="The Hidden Cost of Unclear Implementation">
                Unclear implementation creates delays, uneven quality, and avoidable risk across teams.
                <p className="mt-3 text-sm text-slate-500">Coming soon</p>
              </Card>
              <Card title="From Adoption to Implementation: What Actually Matters">
                Lasting results depend on how consistently key practices are carried out over time.
                <p className="mt-3 text-sm text-slate-500">Coming soon</p>
              </Card>
            </div>
          </Container>
        </section>

        <section id="partner" className="py-24">
          <Container>
            <SectionHeader
              title="Partner With i:Quest Learning Solutions"
              intro="We are currently developing and refining this approach and are seeking organizations interested in applying research-informed implementation practices."
            />
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full border border-slate-300 px-4 py-2">Pilot partnerships</span>
              <span className="rounded-full border border-slate-300 px-4 py-2">Research collaboration</span>
              <span className="rounded-full border border-slate-300 px-4 py-2">
                Early access conversations
              </span>
            </div>
            <form
              className="mt-10 grid gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm text-slate-700">
                  Name
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="text-sm text-slate-700">
                  Organization
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                  />
                </label>
              </div>
              <label className="text-sm text-slate-700">
                Email
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </label>
              <label className="text-sm text-slate-700">
                Message
                <textarea
                  required
                  rows="5"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
                />
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Send message
                </button>
                {submitted ? (
                  <p className="text-sm text-slate-600">
                    Thank you. Your message has been received successfully.
                  </p>
                ) : null}
              </div>
            </form>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
