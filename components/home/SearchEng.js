import React from 'react'
import InputItem from './InputItem'

function SearchEng() {
  return (
    <div className='p-2 md:pd-5 border-[2px] rounded-xl'>
        <p className='text-[25px] font-semibold'>Peça uma corrida</p>
        <InputItem type='source'/>
        <InputItem type='destination'/>
        <button className='p-3 bg-black w-full mt-5
        text-white rounded-lg'>Pesquisar</button>
    </div>
  )
}

export default SearchEng