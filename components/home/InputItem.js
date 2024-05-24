"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';

function InputItem({ type }) {
    const [value, setValue] = useState(null);
    const [placeholder, setPlaceholder] = useState(null);
    const { source, setSource } = useContext(SourceContext);
    const { destination, setDestination } = useContext(DestinationContext);

    useEffect(() => {
        type == 'source'
            ? setPlaceholder('Local de Partida')
            : setPlaceholder('Destino Final')
    }, []);

    const getLatLong = (place, type) => {
        const placeId = place.value.place_id;
        const service = new google.maps.places.PlacesService(document.createElement('div'))
        service.getDetails({ placeId }, (place, status) => {

            if (status === 'OK' && place.geometry && place.geometry.location) {
                console.log(place.geometry.location.lat());
                if (type == 'source') {

                    setSource({
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                        name: place.formatted_address,
                        label: place.name
                    })

                } else {

                    setDestination({
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                        name: place.formatted_address,
                        label: place.name
                    })

                }
            }
        })
    }

    return (

        <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
            <Image src={type == 'source' ? '/src.svg' : '/dest.svg'} width={20} height={20} />

            <GooglePlacesAutocomplete

                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                selectProps={{
                    value,
                    onChange: (place) => { getLatLong(place, type); setValue(place) },
                    placeholder: placeholder,
                    isClearable: true,
                    className: 'w-full',
                    components: {
                        DropdownIndicator: false
                    },
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: '#00ffff00',
                            border: 'none'
                        })
                    }
                }}
            />

        </div>
    )
}

export default InputItem