'use client'
import Image from "next/image"
import { useClickAway } from "react-use";
import { Divide as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion";
import {useRef, useState} from 'react'
import {useRouter} from "next/navigation";


export function HamburgerMenu(){
  
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useClickAway(ref, () => setOpen(false));

  const routes = [{title: "home", path: '/'},{title: "Projects", path: 'projetos'},{title: "Contato", path: ''}]


  
  return(
    <div ref={ref} className="lg:hidden ">
    <Hamburger toggled={isOpen} size={24} toggle={setOpen} color="#595959" />
    <AnimatePresence>
      {isOpen && (
        <motion.div
         className="fixed h-full left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 z-10 bg-gray-200 border-b border-b-white/20"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         >

          <ul className="grid gap-1">
           {routes.map((route,idx)=>{
              return(
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  className="w-full p-[0.08rem] border-b-[1.5px] border-gray-700">
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                      }
                      href={route.path}
                    >
                      <span className={`flex gap-1 text-2xl  ${route.path == '/' ? "text-blue-500": "text-gray-600"} font-medium capitalize`}>{route.title}</span>
            
                    </a>
                  </motion.li>
              )
            })}
            
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);    
   
  
}