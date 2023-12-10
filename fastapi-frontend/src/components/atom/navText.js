export default function Navtext(props){
    return(
        <a className={props.navClass} href={props.navRef} aria-current={props.current}>
            <p className={props.textClass}>{props.text}</p>
        </a>
    )
}