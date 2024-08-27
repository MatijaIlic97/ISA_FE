'use client';

import {useEffect} from "react";
import useListData from "@/hooks/useListData";
import { useSearchParams } from 'next/navigation';
import {Card, CardBody, CardHeader, Container} from "reactstrap";

export default function UserProfile(){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const {
        getData,
        loading,
        data
    } = useListData(`user/profile?id=${id}`);

    useEffect(() => {
        getData(`user/profile?id=${id}`);
    }, [id]);

    (console.log(data));

    return (
        <>
            <Container  className="mt-5 content-center">
                <Card className="align-middle">
                    <CardHeader className={"text-center"}>
                        {data !== null && <h1 className={"m-auto"}>{data.firstName} {data.lastName}</h1>}
                    </CardHeader>
                    <CardBody className={"text-center"}>
                        {data !== null && <h1 className={"m-auto"}>Belt: {data.belt}</h1>}
                        {data !== null && <h1 className={"m-auto"}>Total number of trainings: {data.numberOfTrainings}</h1>}
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}