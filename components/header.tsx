import Link from 'next/link'
import Image from 'next/image'

import HomeLink from './home-link'

const Header = () => {
  return (
    <header className="mb-14 flex justify-between">
      <HomeLink />
      <span className="flex items-center justify-center italic">
        <span>by</span>
        <Link className="mx-2 overflow-hidden rounded-full" href="https://github.com/liwenka1" target="_blank">
          <Image width={32} height={32} alt="gitHub" src="/avatar.png"></Image>
        </Link>
      </span>
    </header>
  )
}

export default Header
