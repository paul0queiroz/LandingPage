/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image";

import Logo from '@/assets/lughlogo-removebg-preview.png'
import { FaBook, FaNewspaper, FaUsers } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export function Header() {
    const [menu, setMenu] = useState<any>([
        {
            name: "Sobre Nós",
            link: "sobre",
            icon: <FaUsers />
        },
        {
            name: "Casos de Estudo",
            link: "cases",
            icon: <FaBook />
        },
        {
            name: "Recursos",
            link: "recursos",
            icon: <FaNewspaper />
        },
    ]);

    return (
        <header className="w-full h-20 bg-blue flex items-center">
            <div className="flex items-center justify-evenly w-full">
                <Link href="/">
                    <Image
                        width={100}
                        height={58} 
                        src={Logo}
                        alt="logo"                   
                    />
                </Link>
                
                <ul className="flex items-center gap-12">
                    {menu.map((item: any) => (
                        <Link key={item} href={"/" + item.link}>
                            <li className="flex items-center gap-3 font-medium text-white text-[22px]" key={item}>
                                <span>{item.name}</span>
                                {item.icon}
                            </li>
                        </Link>
                    ))}
                </ul>

                <button
                    className="bg-white text-black p-2 px-6 rounded shadow"
                >
                    Começar
                </button>
                </div>
        </header>
    )
}