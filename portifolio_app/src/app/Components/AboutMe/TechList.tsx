'use client'

import { importAll } from "@/lib/importAll";
import Image from "next/image"


export function TechList (){

  const images = importAll(require.context('/public/techs', false, /\.(png|jpe?g|svg)$/));
  
  const keys = Object.keys(images)


  return(
      <section className=" grid  grid-cols-4 lg:grid-cols-8 grid-rows-2 gap-6 m-8 w-[90%] mx-auto pt-16">
          {
            keys.map((item)=>{
              return(
                <Image
                  key={item}
                  src={images[item].default}
                  alt=""
                  width={64}
                  height={64}
                />
              )
            })
          }
      </section>
   )
}