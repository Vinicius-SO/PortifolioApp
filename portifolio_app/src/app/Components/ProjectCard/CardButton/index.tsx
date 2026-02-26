import Image from "next/image"

interface CardButtonProps {
  name: string
  imageURL: string
}

export function CardButton({name,imageURL}:CardButtonProps){
  return( 
    <div className="w-full h-9 bg-blue-500 rounded-md flex justify-center align-center hover:bg-blue-600">
      <button className="flex items-center justify-center">
        <Image
          src={imageURL}
          alt="click icon"
          width={24}
          height={24}
        />
        <span className="text-sm ml-1 font-medium text-white">{name}</span>
      </button>
    </div>
   )
}