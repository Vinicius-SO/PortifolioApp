'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'
import { Label } from "@/components/ui/label"
import Image from "next/image"
import emailjs from '@emailjs/browser'


const emailSchema = z.object({
  name: z.string().min(1, { message: 'Digite um nome' }),
  email: z.string().min(1, { message: 'Digite um email valido' }).email({message: 'Este email não é valido'}),
  subject: z.string().min(1, { message: 'Digite um assunto valido' }),
  message: z.string().min(1, { message: 'Digite uma mensagem valida' }),
});

export type emailType = z.infer<typeof emailSchema>

export function Form(){

  const {register, handleSubmit, formState: { errors }} = useForm<emailType>({
    resolver: zodResolver(emailSchema),
  })


  function handleSendEmail(data:emailType){
    
    // console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY)
    
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    })
    if(process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_ID){
      emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID,process.env.NEXT_PUBLIC_TEMPLATE_ID, data)
    }
  }

  return(
      <form className="w-full mx-16" onSubmit={handleSubmit(handleSendEmail)}>
        <div className="flex justify-start gap-16 mb-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-gray-800">Seu nome</Label>
            <input id="name" type="text" placeholder="Vitor loren" {...register('name')} className=" border-b-2 border-gray-400 focus:rounded-md shadow-none p-2 outline-blue-300"/>
            {errors.name?.message && <p className='text-[#E22346]'>{errors.name?.message.toString()}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-gray-800">Seu email</Label>
            <input id="email" type="email" placeholder="johnDoe@gmail.com" {...register('email')} className=" border-b-2 border-gray-400 focus:rounded-md shadow-none p-2 outline-blue-300"/>
            {errors.email?.message && <p className='text-[#E22346]'>{errors.email?.message.toString()}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-10">
          <Label htmlFor="email" className="text-gray-800">Assunto</Label>
          <input id="assunto" type="text" placeholder="Digite aqui o seu assunto de interesse" {...register('subject')} className=" border-b-2 border-gray-400 focus:rounded-md shadow-none p-2 outline-blue-300"/>
          {errors.subject?.message && <p className='text-[#E22346]'>{errors.subject?.message.toString()}</p>}
        </div>
        <div className="flex flex-col gap-2 ">
          <Label htmlFor="email" className="text-gray-800">Mensagem</Label>
          <input id="mensagem" type="text" placeholder="Digite aqui a sua mensagem " {...register('message')} className=" border-b-2 border-gray-400 focus:rounded-md shadow-none pb-8 outline-blue-300"/>
          {errors.message?.message && <p className='text-[#E22346]'>{errors.message?.message.toString()}</p>}
        </div>
        <div className="w-full flex justify-center">
          <button type="submit" className="bg-blue-500 text-white font-semibold py-4 px-14 mt-12 rounded-lg flex items-center ">
            <Image
              src='./send.svg'
              alt='enviar'
              width={20}
              height={20}
              className="inline-block m-1"
            />
            Enviar
          </button>
        </div>

      </form>
      
   )
}