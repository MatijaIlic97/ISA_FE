import Image from "next/image";
import judo from "/src/assets/img/judo.jpg"

export default function Home() {
    return (
        <>
            <Image
                alt="Card image cap"
                src={judo}
                width="100%"
            />
        </>
    );
}
