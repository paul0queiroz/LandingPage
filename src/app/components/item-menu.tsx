import Image from "next/image";
import About from '@/assets/people-fill.svg'
import Study from '@/assets/book-half.svg'
import Recurses from '@/assets/newspaper.svg'

type Props = {
    name:string
}

export function ItemRecurses({name} : Props){
    return (
    <button className="flex items-center gap-3 font-medium">
        <span className="text-white">{name}</span>
        <Image
        width={23}
        height={10}
        src={Recurses}
        alt="News"
        />
    </button>
    )
}

export function ItemAbout({name} : Props){
    return (
    <button className="flex items-center gap-3 font-medium">
        <span className="text-white">{name}</span>
        <Image
        width={23}
        height={10}
        src={About}
        alt="AboutUs"
        />
    </button>
    )
}

export function ItemStudy({name} : Props){
    return (
    <button className="flex items-center gap-3 font-medium">
        <span className="text-white">{name}</span>
        <Image
        width={23}
        height={10}
        src={Study}
        alt="StudyCases"
        />
    </button>
    )
}