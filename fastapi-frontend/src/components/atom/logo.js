import Image from "next/image"

export default function Logo(props){

    return(
        <Image
        src={props.src}
        width={50}
        height={50}
        alt={props.alt}
        />
    )
}