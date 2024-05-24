"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function InputItem({ type }) {
    const [value, setValue] = useState(null);
    return (
        <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
            <Image src={type == 'source' ? '/src.svg' : '/dest.svg'} width={20} height={20} />

            <GooglePlacesAutocomplete apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                selectProps={{
                    value,
                    onChange: setValue,
                }}
            />

        </div>
    )
}

export default InputItem