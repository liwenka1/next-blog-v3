'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

import { sans } from '@/fonts/fonts'

const HomeLink = () => {
  const pathname = usePathname()
  const isActive = pathname === '/'

  return (
    <Link className={clsx('inline-block text-2xl font-black', isActive ? '' : 'hover:scale-[1.02]')} href="/">
      <span
        className={clsx(
          sans.className,
          'bg-clip-text text-transparent transition duration-200 ease-out',
          isActive ? 'bg-gradient' : 'bg-gradientActive'
        )}
      >
        overvenk
      </span>
    </Link>
  )
}

export default HomeLink
