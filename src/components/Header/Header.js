import logo from "../../assets/img/akteam.png"
import Image from "next/image";
import Link from "next/link";
import {Button} from "reactstrap";
import {signIn, signOut, useSession} from "next-auth/react";
import Roles from "@/core/roles";
import {CgProfile} from "react-icons/cg";

export default function Header(){
    const {data: session} = useSession();

    function isTrener() {
        for(let i=0; i<session.decoded.roles.length; i++){
            if(session.decoded.roles[i].authority === Roles.TRENER){
                return true;
            }
        }
        return false;
    }

    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link href={"/"}><Image src={logo} alt="logo" priority={true} style={{height: "100px", width: "auto"}} /></Link>
            <nav className="my-2 ms-auto my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="/contact">Contact</a>
                {session && session.user ? (
                    <>
                        <Link href="/" className="me-3 py-2 text-dark text-decoration-none">{session.decoded.email}</Link>
                        {isTrener() ? (<>
                            <Link href="/user/list" className="me-3 py-2 text-dark text-decoration-none">User list</Link>
                            <Link href="/training/create" className="me-3 py-2 text-dark text-decoration-none">Create training</Link>
                            </>
                        ): (<></>)}
                        <Link href={"/user/profile/"+session.decoded.id} className="me-3 py-2 text-dark text-decoration-none"><CgProfile /></Link>
                        <Button className="btn btn-small btn-outline-light" onClick={() => {
                            signOut()
                        }}>Sign out</Button>
                    </>
                ) : (
                    <Button className="btn btn-small btn-outline-light" onClick={() => { signIn() }}>Sign in</Button>
                )}
            </nav>
        </header>
    )
}