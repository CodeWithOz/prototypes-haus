import Link from 'next/link';

// Sample prototype data - replace with your actual prototypes
const inventions = [
  {
    id: 1,
    name: 'The Chronograph Mk. I',
    description: 'Temporal displacement apparatus',
    url: '#',
    status: 'Operational',
    year: '1889',
  },
  {
    id: 2,
    name: 'Aetheric Resonator',
    description: 'Wireless energy transmission device',
    url: '#',
    status: 'Testing',
    year: '1891',
  },
  {
    id: 3,
    name: 'Perpetual Automaton',
    description: 'Self-sustaining mechanical construct',
    url: '#',
    status: 'Blueprint',
    year: '1893',
  },
];

export default function ThirdTheme() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 text-amber-50'>
      {/* Ornate pattern background */}
      <div
        className='fixed inset-0 opacity-[0.08]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated gears */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none opacity-10'>
        <div
          className='absolute top-20 right-20 w-40 h-40 border-8 border-amber-600 rounded-full'
          style={{
            background:
              'radial-gradient(circle, transparent 40%, currentColor 40%, currentColor 60%, transparent 60%)',
            animation: 'rotate 20s linear infinite',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className='absolute w-2 h-8 bg-amber-600 left-1/2 top-0 origin-bottom'
              style={{
                transform: `translateX(-50%) rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>
        <div
          className='absolute bottom-32 left-16 w-32 h-32 border-6 border-amber-700 rounded-full'
          style={{
            background:
              'radial-gradient(circle, transparent 40%, currentColor 40%, currentColor 60%, transparent 60%)',
            animation: 'rotate-reverse 15s linear infinite',
          }}
        />
      </div>

      {/* Theme switcher */}
      <div className='fixed top-6 right-6 z-50 flex gap-3'>
        <Link
          href='/'
          className='px-4 py-2 bg-amber-900/40 backdrop-blur-sm border-2 border-amber-700/50 hover:border-amber-600 hover:bg-amber-900/60 transition-all duration-300 text-sm font-serif shadow-lg'
        >
          Garage Theme
        </Link>
        <Link
          href='/second'
          className='px-4 py-2 bg-amber-900/40 backdrop-blur-sm border-2 border-amber-700/50 hover:border-amber-600 hover:bg-amber-900/60 transition-all duration-300 text-sm font-serif shadow-lg'
        >
          Lab Theme
        </Link>
      </div>

      <div className='relative max-w-7xl mx-auto px-6 py-16 sm:px-12 sm:py-24'>
        {/* Header Section */}
        <header className='mb-20'>
          <div className='mb-8 relative'>
            <div className='absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600' />
            <div className='absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-600 rounded-full border-2 border-amber-400' />

            <h1 className='text-5xl sm:text-7xl font-serif italic text-amber-500 mb-2 tracking-wide'>
              The Inventor&apos;s
            </h1>
            <h2 className='text-4xl sm:text-6xl font-serif font-bold text-amber-400 tracking-wider flex items-center gap-4'>
              WORKSHOP
              <svg
                className='w-12 h-12 text-amber-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
              >
                <circle cx='12' cy='12' r='3' strokeWidth='2' />
                <path d='M12 1v6m0 6v6M23 12h-6m-6 0H1' strokeWidth='2' />
              </svg>
            </h2>
          </div>

          <div className='mt-12 max-w-3xl'>
            <div className='relative p-8 bg-stone-900/50 backdrop-blur-sm border-4 border-double border-amber-700/50 shadow-2xl'>
              <div className='absolute -top-4 -left-4 w-8 h-8 border-4 border-amber-600 bg-stone-900 rotate-45' />
              <div className='absolute -top-4 -right-4 w-8 h-8 border-4 border-amber-600 bg-stone-900 rotate-45' />
              <div className='absolute -bottom-4 -left-4 w-8 h-8 border-4 border-amber-600 bg-stone-900 rotate-45' />
              <div className='absolute -bottom-4 -right-4 w-8 h-8 border-4 border-amber-600 bg-stone-900 rotate-45' />

              <div className='font-serif italic text-amber-600 mb-4 text-sm tracking-widest'>
                EST. MDCCCLXXXV
              </div>

              <p className='text-xl text-amber-100 font-serif mb-4 leading-relaxed'>
                Within these hallowed halls, the impossible becomes possible
                through ingenuity, persistence, and the marriage of art and
                science.
              </p>
              <p className='text-lg text-amber-200/80 font-serif leading-relaxed'>
                Each invention catalogued herein represents countless hours of
                meticulous craftsmanship, inspired by the great minds of our
                age. These mechanical marvels push the boundaries of what
                mankind can achieve.
              </p>

              <div className='mt-6 flex items-center gap-2 text-sm font-serif italic text-amber-600/80'>
                <span>⚙</span>
                <span>Cogito, ergo creo</span>
                <div className='h-px flex-1 bg-gradient-to-r from-amber-600/50 to-transparent' />
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className='mt-12 flex flex-wrap gap-8 items-center justify-center sm:justify-start'>
            {[
              { icon: '⚙', label: 'Patents Filed', value: '47' },
              { icon: '⚗', label: 'Experiments', value: '203' },
              { icon: '⚡', label: 'Breakthroughs', value: 'XII' },
            ].map((metric, i) => (
              <div key={i} className='flex items-center gap-4'>
                <div className='w-16 h-16 rounded-full bg-amber-900/50 border-2 border-amber-700 flex items-center justify-center text-3xl'>
                  {metric.icon}
                </div>
                <div>
                  <div className='text-2xl font-serif font-bold text-amber-500'>
                    {metric.value}
                  </div>
                  <div className='text-sm text-amber-300/70 font-serif'>
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* Inventions Grid */}
        <section>
          <div className='flex items-center gap-4 mb-10'>
            <div className='w-1 h-12 bg-gradient-to-b from-transparent via-amber-600 to-transparent' />
            <h3 className='text-3xl font-serif font-bold text-amber-400 tracking-wide'>
              Current Inventions
            </h3>
            <div className='h-px flex-1 bg-gradient-to-r from-amber-600/50 to-transparent' />
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {inventions.map((invention, index) => (
              <a
                key={invention.id}
                href={invention.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border-2 border-amber-700/40 hover:border-amber-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-900/50'
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Corner decorations */}
                <div className='absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-amber-600' />
                <div className='absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-amber-600' />
                <div className='absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-amber-600' />
                <div className='absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-amber-600' />

                {/* Year badge */}
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-900 border-2 border-amber-600 text-amber-400 text-xs font-serif italic shadow-lg'>
                  Anno {invention.year}
                </div>

                {/* Status indicator */}
                <div className='absolute top-6 right-6'>
                  <div
                    className={`px-3 py-1 text-xs font-serif italic border-2 ${
                      invention.status === 'Operational'
                        ? 'bg-emerald-900/50 border-emerald-600 text-emerald-400'
                        : invention.status === 'Testing'
                        ? 'bg-amber-900/50 border-amber-600 text-amber-400'
                        : 'bg-blue-900/50 border-blue-600 text-blue-400'
                    }`}
                  >
                    {invention.status}
                  </div>
                </div>

                <div className='relative p-8 pt-12'>
                  <h4 className='text-2xl font-serif font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors'>
                    {invention.name}
                  </h4>

                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-3 h-3 border-2 border-amber-600 rotate-45' />
                    <div className='h-px flex-1 bg-gradient-to-r from-amber-600 to-transparent' />
                  </div>

                  <p className='text-amber-200/80 mb-6 leading-relaxed font-serif text-sm'>
                    {invention.description}
                  </p>

                  <div className='flex items-center gap-2 text-amber-500 font-serif italic text-sm group-hover:gap-3 transition-all duration-300'>
                    <span>Examine Schematics</span>
                    <span className='text-lg'>→</span>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000' />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className='mt-24 pt-12 border-t-2 border-double border-amber-700/40'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            <div className='text-amber-600/80 font-serif italic text-sm'>
              <span className='text-amber-500 text-lg'>❦</span> Through Steam
              and Steel, We Build Tomorrow
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex gap-2'>
                <div className='w-3 h-3 border-2 border-amber-600 rotate-45 animate-pulse' />
                <div
                  className='w-3 h-3 border-2 border-amber-600 rotate-45 animate-pulse'
                  style={{ animationDelay: '0.5s' }}
                />
                <div
                  className='w-3 h-3 border-2 border-amber-600 rotate-45 animate-pulse'
                  style={{ animationDelay: '1s' }}
                />
              </div>
              <span className='text-sm font-serif text-amber-600/80'>
                Workshop Active
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
