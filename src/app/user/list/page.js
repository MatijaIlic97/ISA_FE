"use client";
import Link from "next/link";
import useGetListData from "@/hooks/useGetListData";
import {useEffect} from "react";

export default function UserList() {
    const {getData, loading,data} = useGetListData("user/getlist");
    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <>
        </>
    );
}