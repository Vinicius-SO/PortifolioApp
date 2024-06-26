import Image from 'next/image'
import { HamburgerMenu } from './components/hamburgerMenu'
import { ContactButton } from './components/ContactButton'
import Link from 'next/link'

export function Header(){

  return(
       <>
        <header className="bg-gray-200 bg-fixed h-14 shadow-md shadow-slate-500">
          <div className='w-[80%] h-[100%] flex flex-row items-center justify-between  mx-auto' >
            <Image
              src="/Logo.svg"
              width={32}
              height={32}
              alt="Logo"
            />

            <HamburgerMenu/>
            <div className='captalize lg:flex text-gray-600 text-2xl gap-7 hidden'>
              <Link href={'/'} className='text-blue-500'>Home</Link>
              <Link href={'/#Projects'} >Projects</Link>
              <ContactButton/>
            </div>
          </div>
        </header>
       </>
   )
}
