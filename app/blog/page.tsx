import Link from 'next/link'

export default function services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Blog</h1>
      <ul>
        <li><Link className="text-blue-500 hover:text-blue-800" href="/blog/nextjs-setup">Nextjs setup</Link></li>
        <li><Link className="text-blue-500 hover:text-blue-800" href="/blog/tailwind-css">tailwind</Link></li>

      </ul>
    </main>
  )
}
