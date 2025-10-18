import { APP_NAME } from '@/constants/text';
import Link from 'next/link';

type PrototypeStatus = 'alpha' | 'beta' | 'stable';

type Prototype = {
  name: string;
  description: string;
  url: string;
  status: PrototypeStatus;
};

const prototypes: Prototype[] = [
  {
    name: 'GeldTrail',
    description: 'Expense tracking app. Scan receipts and view analytics.',
    url: 'https://geldtrail.prototypes.haus',
    status: 'alpha',
  },
  {
    name: 'Artenee',
    description:
      'Gratitude journal, with daily gratitude reminders based on journal entries.',
    url: 'https://artenee.ucheoz.tech',
    status: 'beta',
  },
  {
    name: 'Content Matcher',
    description:
      "RAG search over DeepLearning.AI's short courses and Toronto Tech Week 2025 events.",
    url: 'https://matcher.ucheoz.tech',
    status: 'stable',
  },
  {
    name: 'PairMaster',
    description:
      "A clone of Duolingo's Match Madness game, with the ability to add and practice your own word pairs.",
    url: 'https://pairmaster.ucheoz.tech',
    status: 'stable',
  },
  {
    name: 'My Bookshelf',
    description: "A bookshelf displaying the books I've been reading.",
    url: 'https://halfbaked.ucheoz.tech',
    status: 'stable',
  },
  {
    name: 'SPREEDR!',
    description:
      'Paste and speed read. Offline-capable and installable on mobile.',
    url: 'https://spreedr.vercel.app/',
    status: 'stable',
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-stone-900 text-zinc-100'>
      {/* Grid paper background */}
      <div
        className='fixed inset-0 opacity-10'
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
          backgroundSize: '30px 30px',
        }}
      />

      <div className='relative max-w-7xl mx-auto px-6 py-12 sm:px-12 sm:pt-20'>
        {/* Header Section */}
        <header className='mb-20'>
          <div className='flex gap-3 items-center mb-6'>
            <div className='inline-block px-4 sm:px-6 py-2 sm:py-3 bg-orange-500/20 border-2 border-orange-500/50 rounded-none skew-x-[-2deg] shadow-[4px_4px_0px_0px_rgba(249,115,22,0.3)]'>
              <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-orange-500 skew-x-[2deg]'>
                PROTOTYPES
              </h1>
            </div>
            <div>
              <div className='inline-block px-3 sm:px-4 py-1 sm:py-2 bg-zinc-800 border-l-4 border-orange-500'>
                <h2 className='text-md sm:text-xl md:text-2xl lg:text-4xl font-bold text-zinc-300'>
                  HAUS
                </h2>
              </div>
            </div>
          </div>

          <div className='mt-12 max-w-2xl'>
            <div className='relative pl-6 border-l-4 border-orange-500/50'>
              <p className='text-xl sm:text-2xl text-zinc-300 font-light mb-4'>
                Welcome to the workshop. It&apos;s a showcase of my ideas as I
                build, test, and refine them.
              </p>
              <p className='text-lg text-zinc-400'>
                Each prototype represents an exploration in progress.
                Proofs-of-concepts, functional builds, and helpful software
                sourced from my desire to learn and my personal experiences.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className='mt-8 flex items-center gap-4 text-sm font-mono text-orange-500/70'>
            <div className='h-px w-16 bg-orange-500/50' />
            <span>STATUS: OPERATIONAL</span>
            <div className='h-px flex-1 bg-orange-500/50' />
          </div>
        </header>

        {/* Prototypes Grid */}
        <section>
          <div className='flex items-center gap-4 mb-10'>
            <div className='w-12 h-12 bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center'>
              <div className='w-6 h-6 bg-orange-500 animate-pulse' />
            </div>
            <h3 className='text-3xl font-black text-zinc-200 tracking-wide'>
              ACTIVE BUILDS
            </h3>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {prototypes.map((prototype, index) => (
              <a
                key={index}
                href={prototype.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative bg-zinc-800/50 backdrop-blur-sm border-2 border-zinc-700 hover:border-orange-500 transition-all duration-300 overflow-hidden'
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Corner rivets */}
                <div className='absolute top-2 left-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-500' />
                <div className='absolute top-2 right-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-500' />
                <div className='absolute bottom-2 left-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-500' />
                <div className='absolute bottom-2 right-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-500' />

                {/* Status indicator */}
                <div className='absolute top-6 right-6'>
                  <div
                    className={`px-3 py-1 text-xs font-mono border ${
                      prototype.status === 'stable'
                        ? 'bg-green-500/20 border-green-500 text-green-400'
                        : prototype.status === 'beta'
                        ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                        : 'bg-blue-500/20 border-blue-500 text-blue-400'
                    }`}
                  >
                    {prototype.status.toUpperCase()}
                  </div>
                </div>

                <div className='p-8 pt-16'>
                  <div className='mb-4'>
                    <div className='w-16 h-1 bg-orange-500 mb-4 group-hover:w-24 transition-all duration-300' />
                    <h4 className='text-2xl font-black text-zinc-100 mb-2 group-hover:text-orange-400 transition-colors'>
                      {prototype.name}
                    </h4>
                  </div>

                  <p className='text-zinc-400 mb-6 leading-relaxed'>
                    {prototype.description}
                  </p>

                  <div className='flex items-center gap-2 text-orange-500 font-mono text-sm group-hover:gap-4 transition-all duration-300'>
                    <span>EXPLORE BUILD</span>
                    <span className='text-xl'>→</span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className='mt-24 pt-12 border-t border-zinc-700'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            <div className='text-zinc-500 text-center sm:text-left font-mono text-sm'>
              <span className='text-orange-500'>{'///'}</span> Curated with
              dedication by{' '}
              <a
                href='https://www.linkedin.com/in/uchechukwu-ozoemena/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-orange-500 hover:text-orange-400 underline transition-colors'
              >
                CodeWithOz
              </a>
            </div>
            <div className='flex gap-6 text-zinc-500 hover:text-zinc-400'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='text-sm font-mono'>SYSTEM ONLINE</span>
              </div>
            </div>
          </div>
          <div className='mt-12 text-center text-zinc-500 font-mono text-sm'>
            &copy; {currentYear} {APP_NAME}
          </div>
        </footer>
      </div>
    </div>
  );
}
