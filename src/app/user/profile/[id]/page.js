'use client';

import {useEffect} from "react";
import useListData from "@/hooks/useListData";
import {usePathname} from 'next/navigation';
import {Card, CardBody, CardHeader, Container} from "reactstrap";

export default function UserProfile(){
    const pathname = usePathname();
    const a = pathname.split("/")[3];
    // setId(Number(a));

    const {
        getData,
        loading,
        data
    } = useListData(`user/profile?profile=${a}`);

    useEffect(() => {
        getData(`user/profile?profile=${a}`);
    }, [a]);


    return (
        <>
            <Container  className="mt-5 content-center">
                <Card className="align-middle">
                    <CardHeader className={"text-center"}>
                        {data !== null && <h1 className={"m-auto"}>{data.firstName} {data.lastName}</h1>}
                    </CardHeader>
                    <CardBody className={"text-center"}>
                        {data !== null && <h1 className={"m-auto"}>Total number of trainings: {data.numberOfTrainings}</h1>}
                        {data !== null && <h1 className={"m-auto"}>Belt: {data.belt}</h1>}
                        {data !== null && <h1 className={"m-auto"}>Email: {data.email}</h1>}
                        {data !== null && <h1 className={"m-auto"}>Weight: {data.weight}</h1>}
                        {data !== null && <h1 className={"m-auto"}>Height: {data.height}</h1>}
                        {data !== null && <h1 className={"m-auto"}>Birth Date: {data.dateOfBirth}</h1>}
                        {data !== null && <h1 className={"m-auto"}>Start Date: {data.startDate}</h1>}
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}