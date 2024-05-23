import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function Header(){
    const headerMenu=[
        {
            id: 1,
            name: 'Corrida',
            icon: '/car-front-fill.svg'
        },
        {
            id: 2,
            name: 'Entrega',
            icon: '/box-seam-fill.svg'
        }
    ]
    return(
        <div className="p-4 pb-3 pl-10 border-b-[4px] border-gray-300 flex items-center justify-between">
            <div className="flex gap-24 items-center">
                <Image src='/uber-clone-trans.png' 
                width={200} height={70} alt='logo'/>
                <div className="flex gap-6 items-center">
                    {headerMenu.map((item)=>(
                        <div className="flex gap-2 items-center">
                            <Image src={item.icon}
                            width={25} height={25}/>
                            <h2 className="text-[18px] font-medium">{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <UserButton />
        </div>
    )
}   

export default Header