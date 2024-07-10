"use client"

import {Button, Row} from "reactstrap";
import {useForm} from "react-hook-form";
import {post} from "/src/core/httpClient";
export default function UserCreate() {
    const {register, watch, handleSubmit, formState:{errors}} = useForm();

    console.log(watch());
    return (
        <>
            <Row className="mb-2">
                <input type="text" className="form-control" placeholder="First Name" {...register("firstName", {
                    required: "First Name is required",
                })} />
            </Row>

            {errors && errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
            )}
            <Row className="mb-2">
                <input type="text" className="form-control" placeholder="Last Name" {...register("lastName", {
                    required: "Last Name is required",
                })} />
            </Row>
            {errors && errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
            )}

            <Button className="btn btn-primary" type="submit" onClick={() => {
                handleSubmit(async (data) => {
                    await post("user/create", data);
                })();
            }} >Submit</Button>
        </>

    );
}