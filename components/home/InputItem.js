import React from 'react'
import Image from 'next/image'

function InputItem({type}) {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3
    flex items-center gap-4'>
        <Image src={type =='source'?'/src.svg':'/dest.svg'} width={20} height={20}/>
        <input type='text' placeholder={type=='source'?'Local de partida':'Destino final'}
        className='bg-transparent w-full outline-none'/>
    </div>
  )
}

export default InputItem