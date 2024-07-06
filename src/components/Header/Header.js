import logo from "../../assets/img/akteam.png"
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link href={"/"}><Image src={logo} alt="logo" height={100} width={100}/></Link>
            <nav className="my-2 ml-auto my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#">Team</a>
                <a className="p-2 text-dark" href="#">Contact</a>
            </nav>
            <a className="btn btn-outline-primary" href="/login">Log in</a>
        </header>
    )
}