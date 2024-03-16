'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const HomeLink = () => {
  const pathname = usePathname()
  const isActive = pathname === '/'

  return (
    <Link href="/" className={clsx('text-background inline-block text-2xl font-black')}>
      overvenk
    </Link>
  )
}

export default HomeLink
