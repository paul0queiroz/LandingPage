import IconStart from '@/assets/play-svgrepo-com.svg'
import Image from 'next/image'

type Props = {
    name:string
}

export function Start({name}: Props) {
    return (
        <div>
        <button className="">
                <span className="text-white">
                    {name}                    
                </span>
            </button>
            <Image
            width={10}
            height={8}
            src={IconStart} 
            alt="Start"/>
            <input type="text" className="bg bg-transparent outline-none text-white placeholder:text-white"/>
        </div>
    )
}