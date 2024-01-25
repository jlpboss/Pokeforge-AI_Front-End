import Link from "next/link"
export default function Navtext(props){
    return(
        <Link className={props.navClass} href={props.navRef} aria-current={props.current}>
            <p className={props.textClass}>{props.text}</p>
        </Link>
    )
}