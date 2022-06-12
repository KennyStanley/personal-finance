import Link from 'next/link'
import { useAppMachine } from './_app'

export default function Home() {
  const [app, send] = useAppMachine()

  return (
    <>
      <main data-testid="index">
        <div className="h-screen flex flex-col justify-center align-middle text-center">
          State: {app.value}{' '}
          <Link href={'/'} passHref>
            <span className="cursor-pointer mt-4 mx-auto w-max px-4 py-2 rounded-lg bg-black text-white">Index</span>
          </Link>
          <button onClick={() => send('CLICK')} className="mt-4 mx-auto w-max px-4 py-2 rounded-lg bg-black text-white">
            send(&apos;CLICK&apos;)
          </button>
        </div>
      </main>
    </>
  )
}
