import Link from 'next/link';

// Sample prototype data - replace with your actual prototypes
const experiments = [
  {
    id: 1,
    name: 'Experiment A-01',
    description: 'Initial hypothesis testing phase',
    url: '#',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Experiment B-07',
    description: 'Chemical synthesis iteration',
    url: '#',
    status: 'Complete',
  },
  {
    id: 3,
    name: 'Experiment C-12',
    description: 'Quantum observation study',
    url: '#',
    status: 'Pending',
  },
];

export default function SecondTheme() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-slate-100'>
      {/* Hexagonal pattern background */}
      <div
        className='fixed inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles effect */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-50'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Theme switcher */}
      <div className='fixed top-6 right-6 z-50 flex gap-3'>
        <Link
          href='/'
          className='px-4 py-2 bg-cyan-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:bg-cyan-800/30 hover:border-cyan-400 transition-all duration-300 text-sm font-mono'
        >
          Garage Theme
        </Link>
        <Link
          href='/third'
          className='px-4 py-2 bg-cyan-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:bg-cyan-800/30 hover:border-cyan-400 transition-all duration-300 text-sm font-mono'
        >
          Alt Theme
        </Link>
      </div>

      <div className='relative max-w-7xl mx-auto px-6 py-16 sm:px-12 sm:py-24'>
        {/* Header Section */}
        <header className='mb-20'>
          <div className='mb-8'>
            <div className='inline-flex items-baseline gap-2 sm:gap-4'>
              <h1 className='text-4xl sm:text-6xl lg:text-8xl font-light tracking-wider text-cyan-400'>
                RESEARCH
              </h1>
              <div className='w-3 h-3 bg-cyan-400 rounded-full animate-pulse' />
            </div>
            <h2 className='text-2xl sm:text-3xl lg:text-5xl font-thin text-cyan-300/70 tracking-[0.2em] sm:tracking-[0.3em] ml-1'>
              LABORATORY
            </h2>
          </div>

          <div className='mt-12 max-w-3xl'>
            <div className='relative p-8 bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl'>
              <div className='absolute -top-3 left-6 px-3 py-1 bg-slate-900 border border-cyan-500/50 text-cyan-400 text-xs font-mono tracking-wider'>
                MISSION STATEMENT
              </div>

              <p className='text-xl text-slate-300 font-light mb-4 leading-relaxed'>
                A controlled environment for scientific exploration and
                iterative discovery.
              </p>
              <p className='text-lg text-slate-400 leading-relaxed'>
                Each experiment follows rigorous methodology—testing hypotheses,
                documenting observations, and refining approaches through
                empirical evidence. Welcome to the intersection of curiosity and
                precision.
              </p>

              <div className='mt-6 flex items-center gap-3 text-sm font-mono text-cyan-400/70'>
                <div className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse' />
                <span>LAB STATUS: OPERATIONAL</span>
                <div className='h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent' />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className='mt-10 grid grid-cols-3 gap-6'>
            {[
              { label: 'Active Experiments', value: '03' },
              { label: 'Success Rate', value: '87%' },
              { label: 'Lab Hours', value: '240+' },
            ].map((stat, i) => (
              <div
                key={i}
                className='p-6 bg-slate-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl text-center hover:border-cyan-400/50 transition-all duration-300'
              >
                <div className='text-3xl font-light text-cyan-400 mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm text-slate-400 font-mono tracking-wide'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* Experiments Grid */}
        <section>
          <div className='flex items-center gap-4 mb-10'>
            <div className='relative w-12 h-12'>
              <div className='absolute inset-0 bg-cyan-500/20 rounded-full animate-ping' />
              <div className='relative w-full h-full bg-cyan-500/30 border-2 border-cyan-400 rounded-full flex items-center justify-center'>
                <div className='w-4 h-4 bg-cyan-400 rounded-full' />
              </div>
            </div>
            <h3 className='text-3xl font-light text-cyan-300 tracking-wide'>
              Current Experiments
            </h3>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {experiments.map((experiment, index) => (
              <a
                key={experiment.id}
                href={experiment.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800/40 transition-all duration-500 rounded-2xl overflow-hidden'
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Beaker icon effect */}
                <div className='absolute -top-10 -right-10 w-32 h-32 opacity-5'>
                  <svg
                    viewBox='0 0 100 100'
                    className='w-full h-full text-cyan-400'
                  >
                    <path
                      fill='currentColor'
                      d='M35,10 L35,40 L25,70 Q25,85 40,85 L60,85 Q75,85 75,70 L65,40 L65,10 Z M40,10 L60,10 M30,70 L70,70'
                      stroke='currentColor'
                      strokeWidth='2'
                    />
                  </svg>
                </div>

                {/* Status badge */}
                <div className='absolute top-6 right-6 z-10'>
                  <div
                    className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded-full backdrop-blur-sm ${
                      experiment.status === 'Complete'
                        ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                        : experiment.status === 'Active'
                        ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                        : 'bg-amber-500/20 border border-amber-400 text-amber-300'
                    }`}
                  >
                    {experiment.status.toUpperCase()}
                  </div>
                </div>

                <div className='relative p-8'>
                  <div className='mb-1 text-xs font-mono text-cyan-400/60 tracking-widest'>
                    PROTOTYPE
                  </div>
                  <h4 className='text-2xl font-light text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors'>
                    {experiment.name}
                  </h4>

                  <div className='w-16 h-px bg-gradient-to-r from-cyan-400 to-transparent mb-4 group-hover:w-24 transition-all duration-500' />

                  <p className='text-slate-400 mb-6 leading-relaxed text-sm'>
                    {experiment.description}
                  </p>

                  <div className='flex items-center gap-2 text-cyan-400 font-mono text-xs group-hover:gap-3 transition-all duration-300'>
                    <span>VIEW EXPERIMENT</span>
                    <svg
                      className='w-4 h-4 group-hover:translate-x-1 transition-transform'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-400/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className='mt-24 pt-12 border-t border-cyan-500/20'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            <div className='text-slate-500 font-mono text-sm tracking-wide'>
              <span className='text-cyan-400'>λ</span> Hypothesis • Experiment •
              Iteration • Discovery
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex gap-1'>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className='w-2 h-6 bg-cyan-400/30 rounded-sm'
                    style={{
                      animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
              <span className='text-sm font-mono text-slate-500'>
                MONITORING
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
