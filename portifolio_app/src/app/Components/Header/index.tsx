import Image from 'next/image'
import { HamburgerMenu } from './components/hamburgerMenu'

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
          </div>
        </header>
       </>
   )
}
