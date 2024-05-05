import React from 'react'

const Cards = () => {
  return (
    <div className='w-full w-screen bg-zinc-900 flex gap-5 items-center p-10'>
        <div className='cardcontainer h-[60vh] w-1/2 '>
            <div className='card w-full relative h-full rounded-xl flex items-center justify-center bg-[#004D43]'>
                <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
                <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-[#CDEA68] border-[1px] text-[#CDEA68]'>©2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer h-[60vh] w-1/2 flex gap-5 '>
            <div className='card w-1/2 relative h-full rounded-xl flex items-center justify-center bg-[#212121]'>
                <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
                <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-zinc-100 border-[1px] text-zinc-100 uppercase'>Rating 5.0 on clutch</button>
            </div>
            <div className='card w-1/2 relative h-full rounded-xl flex items-center justify-center bg-[#212121]'>
                <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
                <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-zinc-100 border-[1px] text-zinc-100 uppercase'>Business bootcamp</button>
            </div>
        </div>
    </div>
  )
}

export default Cards