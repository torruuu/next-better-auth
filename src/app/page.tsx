import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight">
            To get started, edit the page.tsx file.
          </h1>
        </div>
      </main>
    </div>
  )
}
