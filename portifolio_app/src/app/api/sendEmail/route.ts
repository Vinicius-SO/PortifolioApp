import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

 
type ResponseData = {
  message: string
}
 
export async function POST(request: Request) {
  const formData = await request.formData()
  // emailjs.init({
  //   publicKey: process.env.PUBLIC_KEY,
  // })

  // emailjs.send("service_engvxi8","template_vv4hhh7",data)
  return NextResponse.json({message:"ok"},{status:200})
}