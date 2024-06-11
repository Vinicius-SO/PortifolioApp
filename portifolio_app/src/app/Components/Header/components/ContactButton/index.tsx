import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import Image from "next/image"
import { Form, emailType } from "@/app/Components/Header/components/ContactButton/form"



export function ContactButton(){

  return(
       <>
          <Dialog>
            <DialogTrigger asChild>
              <button>Contact</button> 
            </DialogTrigger>
            <DialogContent className="max-w-[1200px] h-[620px] p-8 grid grid-cols-3">
              <DialogHeader className="bg-blue-400 rounded-xl px-8 pt-8 col-span-1">
                <DialogTitle className=" text-white font-semibold text-[40px] break-normal">Informações sobre mim</DialogTitle>
                <div className="text-white flex flex-col gap-8 pt-14">
                  <span className="flex gap-2 items-center">
                    <Image
                      src="./infos/person.svg"
                      alt="Person icon"
                      width={32}
                      height={32}
                      className="inline-block"
                    />
                    Vinicius Soares Oliveira
                  </span>
                  <span className="flex gap-2 items-center">
                    <Image
                      src="./infos/email.svg"
                      alt="Person icon"
                      width={32}
                      height={32}
                      className="inline-block"
                    />
                    vhisoares39@gmail.com
                  </span>
                  <span className="flex gap-2 items-center">
                    <Image
                      src="./infos/phone.svg"
                      alt="Person icon"
                      width={32}
                      height={32}
                      className="inline-block"
                    />
                    +55 (11) 994506648
                  </span>

                  <span className="flex gap-2 items-center">
                    <Image
                      src="./infos/Pin.svg"
                      alt="Person icon"
                      width={32}
                      height={32}
                      className="inline-block"
                    />
                    Taboão Da Serra - SP
                  </span>
                </div>
                <DialogDescription>
                  
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center col-span-2 ">
                  <Form />
              </div>
            </DialogContent>
          </Dialog>

        {/* */}
       </>
   )
}