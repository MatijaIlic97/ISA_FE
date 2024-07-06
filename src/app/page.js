import Image from "next/image";
import judo from "/src/assets/img/judo.jpg"
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";

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
