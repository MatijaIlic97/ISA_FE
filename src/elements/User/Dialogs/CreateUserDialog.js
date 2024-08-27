import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import {useListActions} from "@/contexts/listActionContext";
import listAction from "@/core/listAction";
import {useForm} from "react-hook-form";
import {post} from "@/core/httpClient";
import {toast} from "react-toastify";

const CreateUserDialog = ({isOpen}) => {
    const {dispatch} = useListActions();

    const toggle = () => dispatch({
        type: listAction.RESET
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onSubmit"
    });

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Row className="mb-3">
                    <Col md={6} className="mb-1">
                        <input type="text" className="form-control" placeholder="First name" {...register("firstName", {
                            required: "First name is required!",
                            maxLength: 50,
                            minLength: 3,
                        })} />
                        {errors && errors.firstName && (
                            <span className="text-danger">{errors.firstName.message}</span>
                        )}
                    </Col>
                    <Col md={6}>
                        <input type="text" className="form-control" placeholder="Last name" {...register("lastName", {
                            required: "Last name is required!",
                            maxLength: 50,
                            minLength: 3,
                        })}/>
                        {errors && errors.lastName && (
                            <span className="text-danger">{errors.lastName.message}</span>
                        )}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="mb-1">
                        <input type="text" className="form-control" placeholder="Email" {...register("email", {
                            required: "Email is required!"
                        })} />
                        {errors && errors.email && (
                            <span className="text-danger">{errors.email.message}</span>
                        )}
                    </Col>
                    {/*<Col md={6}>*/}
                    {/*    <input type="text" className="form-control"*/}
                    {/*           placeholder="Contact number" {...register("contactNumber", {*/}
                    {/*        required: "Contact number is required!",*/}
                    {/*        maxLength: 14,*/}
                    {/*        minLength: 9,*/}
                    {/*        validate: (value) => {*/}
                    {/*            if (!/^[0-9]*$/.test(value)) {*/}
                    {/*                return "You can enter only numbers";*/}
                    {/*            }*/}
                    {/*        }*/}
                    {/*    })}/>*/}
                    {/*    {errors && errors.contactNumber && (*/}
                    {/*        <span className="text-danger">{errors.contactNumber.message}</span>*/}
                    {/*    )}*/}
                    {/*</Col>*/}
                    <Col md={6} className="mb-1">
                        <input type="text" className="form-control" placeholder="Belt" {...register("belt", {
                            required: "Belt is required!"
                        })} />
                        {errors && errors.belt && (
                            <span className="text-danger">{errors.belt.message}</span>
                        )}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="mb-1">
                        <input type="number" className="form-control" placeholder="Weight" {...register("weight", {
                            required: "Weight is required!"
                        })} />
                        {errors && errors.weight && (
                            <span className="text-danger">{errors.weight.message}</span>
                        )}
                    </Col>
                    <Col md={6} className="mb-1">
                        <input type="number" className="form-control" placeholder="Height" {...register("height", {
                            required: "Height is required!"
                        })} />
                        {errors && errors.height && (
                            <span className="text-danger">{errors.height.message}</span>
                        )}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="mb-1">
                        <input type="date" className="form-control" placeholder="Birth Date" {...register("dateOfBirth", {
                            required: "Birth Date is required!"
                        })} />
                        {errors && errors.date_of_birth && (
                            <span className="text-danger">{errors.date_of_birth.message}</span>
                        )}
                    </Col>
                    <Col md={6} className="mb-1">
                        <input type="date" className="form-control" placeholder="Start Date" {...register("startDate", {
                            required: "Start Date is required!"
                        })} />
                        {errors && errors.start_date && (
                            <span className="text-danger">{errors.start_date.message}</span>
                        )}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="mb-1">
                        <select className="form-control" {...register("gender", {
                            required: "Gender is required!"
                        })}>
                            <option>male</option>
                            <option>female</option>
                        </select>
                    </Col>
                    <Col md={6} className="mb-1">
                        <input type="password" className="form-control" placeholder="Password" {...register("password", {
                            required: "Password is required!"
                        })} />
                        {errors && errors.password && (
                            <span className="text-danger">{errors.password.message}</span>
                        )}
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button className="btn btn-success" type="button" onClick={() => {
                    handleSubmit(async (data) => {
                        let result = await post("/user/create", data);

                        if (result && result.status === 201) {
                            toast.success("Successfully created!");
                            dispatch({
                                type: listAction.RELOAD
                            });
                        }
                    })();
                }}>
                    Submit
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateUserDialog;