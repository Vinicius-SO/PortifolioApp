'use client'
import { Header } from "../Components/Header";

interface PageParams {
  params: {
    id:string
  }
}

export default function Page({params}:PageParams) {
  console.log(params.id)
  return (
    <div>
      <Header/>
      <p>Post: {params.id}</p>
    </div>
  )
}