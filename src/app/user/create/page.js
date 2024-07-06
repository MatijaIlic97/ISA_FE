"use client"
import Link from "next/link";
import {get} from "@/core/httpClient";
import {useEffect, useState} from "react";
export default function UserCreate() {
    const [loading, setLoading] = useState(false);
    const [data,setData] = useState();

    const getFirstName = async () => {
        setLoading(true);
        let result = await get("user/getfirstname");
        setData(result.data);
        setLoading(false);
        return result;
    }

    useEffect(() => {
        getFirstName();
    }, []);

    console.log(data);
    return (
        <>
            {loading === true ? <h1>Loading...</h1> :(
                <>
                    {/*<h1>{data}</h1>*/}
                    <br/>
                    <Link href="/user/list">Go to userList</Link>
                </>
            )}
        </>
    );
}