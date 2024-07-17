import Image from "next/image";
import judo from "/src/assets/img/judo.jpg"


export default function Home() {
    return (
        <>
            <Image
                alt="judo"
                src={judo}
                style={{height: "auto", width: "100%"}}
            />
        </>
    );
}
