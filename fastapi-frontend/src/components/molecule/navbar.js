import Logo from "../atom/logo"
import Navtext from "../atom/navText"
import Link from "next/link"

export default function Navbar(props) {

    return (
        <nav className={"navbar navbar-expand-md bg-body-tertiary " + props.className}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Logo 
                    src="/Slowpoke.png"
                    alt="Picture of Slowpoke"
                    />
                </Link>
                <button className={"navbar-toggler " + props.colapseClass} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Navtext
                            text={"Home"}
                            textClass={props.className}
                            navClass={"nav-link " + props.active[0]}
                            navRef={"/"}
                            current={props.current[0]}
                            />
                        </li>
                        <li className="nav-item">
                            <Navtext
                            text={"Generate"}
                            textClass={props.className}
                            navClass={"nav-link " + props.active[1]}
                            navRef={"/generate"}
                            current={props.current[1]}
                            />
                        </li>
                        <li className="nav-item">
                            <Navtext
                            text={"About Us"}
                            textClass={props.className}
                            navClass={"nav-link " + props.active[2]}
                            navRef={"/aboutus"}
                            current={props.current[2]}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}