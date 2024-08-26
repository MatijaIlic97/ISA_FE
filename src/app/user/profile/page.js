'use client';

import {useEffect} from "react";
import useListData from "@/hooks/useListData";
import { useSearchParams } from 'next/navigation';
import {Card, Container} from "reactstrap";

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
                    {data !== null && <h1 className={"m-auto"}>{data.firstName}</h1>}
                    {data !== null && <h1 className={"m-auto"}>Number of trainings: {data.numberOfTrainings}</h1>}
                </Card>

            </Container>
        </>
    )
}