import Image from "next/image";

import Logo from '@/assets/lughlogo-removebg-preview.png'
import { ItemAbout, ItemStudy, ItemRecurses } from "./item-menu";
import { Start } from "./start";

export function Header() {
    return (
        <header className="w-full h-20 bg-blue">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="flex items-center gap-14">
                    <Image
                    width={100}
                    height={58} 
                    src={Logo}
                    alt="logo"                   
                    />
                    <ul className="flex items-center gap-12">
                        <li>
                            <ItemAbout
                            name="Sobre Nós"
                            />
                        </li>
                        <li>    
                        <ItemStudy
                        name="Casos de Estudo"
                        />
                        </li>
                        <li>
                        <ItemRecurses 
                        name="Recursos"
                        />
                        </li>
                    </ul>
                    <div>
                        <Start
                        name="Vamos Começar!"
                        />
                    </div>
                    </div>
                </div>
            </div>
        </header>
    )
}