import React from 'react';

export default function InvixaLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <style>{`
        :root {
          color-scheme: light;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.04);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease both;
        }

        .animate-fade-up-delayed {
          animation: fadeUp 0.8s ease 0.15s both;
        }

        .animate-float-soft {
          animation: floatSoft 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3.5s ease-in-out infinite;
        }

        .gradient-border {
          position: relative;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(16, 185, 129, 0.18), rgba(14, 165, 233, 0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Invixa<span className="text-blue-600">.ai</span>
            </h1>
            <p className="text-xs text-slate-500">Fraud invoice detection</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#solution" className="transition hover:text-slate-900">How it helps</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>

          <button className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">
            Request Demo
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_22%),linear-gradient(180deg,#f8fbff_0%,#f5f7fb_100%)]" />
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl animate-pulse-glow" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse-glow" />
                Built for finance teams, operations leads, and SME owners
              </div>

              <h2 className="max-w-2xl text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl">
                Spot invoice fraud early, before it becomes a costly problem.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 lg:text-xl">
                Invixa.ai helps UK SMEs and business users check invoices, spot supplier changes, and flag unusual payment patterns with clear, easy-to-read AI guidance.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Book a Demo
                </button>

                <button className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                  See how it works
                </button>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { value: '99%', label: 'Fraud signals surfaced clearly' },
                  { value: '24/7', label: 'Continuous monitoring' },
                  { value: 'UK', label: 'Compliance-aware workflows' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up-delayed lg:pl-8">
              <div className="absolute -left-6 top-10 hidden h-20 w-20 rounded-3xl bg-emerald-400/15 blur-2xl lg:block" />
              <div className="gradient-border relative rounded-[32px] bg-white p-6 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)] animate-float-soft">
                <div className="rounded-[26px] bg-slate-950 p-6 text-white">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Invoice review summary</p>
                      <h3 className="mt-1 text-2xl font-bold">Invoice #INV-24891</h3>
                    </div>

                    <div className="rounded-full border border-rose-400/30 bg-rose-500/15 px-4 py-2 text-sm font-semibold text-rose-200">
                      High risk
                    </div>
                  </div>

                  <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Supplier verification</p>
                        <p className="mt-1 text-lg font-semibold">Bank details do not match the usual supplier record</p>
                      </div>
                      <div className="rounded-full bg-rose-500/15 px-3 py-1 text-sm font-semibold text-rose-200">Alert</div>
                    </div>
                  </div>

                  <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Payment pattern</p>
                        <p className="mt-1 text-lg font-semibold">Amount is higher than expected for this supplier</p>
                      </div>
                      <div className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-semibold text-amber-200">Review</div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-blue-100/70">AI confidence</p>
                        <p className="mt-1 text-lg font-semibold text-white">Potential invoice fraud identified</p>
                      </div>
                      <div className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-blue-100">98%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Why Invixa.ai</p>
            <h3 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Simple tools for teams that need fast answers, not more noise.
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Clear warnings, readable summaries, and practical actions for UK SMEs handling everyday invoice approvals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'AI Fraud Detection',
                description: 'Highlights suspicious invoices, duplicate requests, and unusual payment amounts before they are approved.',
              },
              {
                title: 'Supplier Verification',
                description: 'Checks supplier bank details and flags changes that could indicate account takeover or redirection attempts.',
              },
              {
                title: 'Readable Alerts',
                description: 'Shows clear risk levels and plain-English explanations so non-technical users can act quickly.',
              },
              {
                title: 'ERP Integration',
                description: 'Fits into existing finance and procurement workflows without creating extra admin work.',
              },
              {
                title: 'UK SME Focus',
                description: 'Designed around the needs of small and mid-sized businesses, finance teams, and shared service users.',
              },
              {
                title: 'Secure by Design',
                description: 'Uses encrypted processing and a cautious review model for sensitive financial information.',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white transition group-hover:bg-blue-600">
                  0{index + 1}
                </div>

                <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">How it helps</p>
              <h3 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
                Less manual checking. More confidence for everyday business decisions.
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Fraud attempts often look like ordinary invoices. Invixa.ai helps teams spot subtle changes quickly so they can approve genuine payments with more confidence.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-2 font-semibold text-slate-900">Traditional process</div>
                <p className="leading-7 text-slate-600">
                  Manual checks are slow, inconsistent, and easy to miss when teams are busy.
                </p>
              </div>

              <div className="rounded-[28px] border border-blue-200 bg-blue-50 p-6 shadow-sm">
                <div className="mb-2 font-semibold text-blue-700">With Invixa.ai</div>
                <p className="leading-7 text-slate-700">
                  AI summarises risk in plain English, surfaces the issue, and gives teams a clear next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="gradient-border rounded-[36px] bg-slate-950 px-8 py-14 text-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.35)] lg:px-16 lg:py-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Coming soon</p>

            <h3 className="mx-auto max-w-3xl text-4xl font-black tracking-tight leading-tight lg:text-5xl">
              Give your team a clearer way to manage invoice risk.
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Invixa.ai is opening early access for UK SME owners, finance teams, and business users who want a simpler way to spot fraud.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your work email"
                className="min-w-[280px] rounded-2xl border border-white/10 bg-white px-6 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 sm:min-w-[340px]"
              />

              <button className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <div>© 2026 Invixa.ai — Invoice risk detection for UK businesses</div>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-slate-900">Privacy</a>
            <a href="#" className="transition hover:text-slate-900">Terms</a>
            <a href="#" className="transition hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
