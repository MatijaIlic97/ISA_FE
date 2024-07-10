"use client"
import {useForm} from "react-hook-form";
import {Col, Row} from "reactstrap";

export default function Login(){
    // const {register, watch} = useForm();
    // console.log(watch());
    return(
        <>
            <Row>
                {/*<Col md={6}>*/}
                {/*    <input type="text" className="form-control" placeholder="First Name" {...register("firstName")} />*/}
                {/*</Col>*/}
                {/*<Col md={6}>*/}
                {/*    <input type="text" className="form-control" placeholder="Last Name" {...register("lastName")} />*/}
                {/*</Col>*/}
            </Row>
        </>
    );
}