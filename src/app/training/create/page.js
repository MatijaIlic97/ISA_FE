'use client'
import {Button, Card, CardBody, CardHeader, Container, Row, Spinner} from "reactstrap";

import React, {useEffect, useState} from "react";
import {useListActions} from "@/contexts/listActionContext";
import useListData from "@/hooks/useListData";
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import DataTable from "react-data-table-component";
import {useForm} from "react-hook-form";
import {post} from "@/core/httpClient";
import {toast} from "react-toastify";

export default function CreateTraining() {
    const tableColumns = [
        {
            name: 'First name',
            selector: (row) => `${row.firstName}`,
            sortable: false
        },
        {
            name: 'Last name',
            selector: (row) => `${row.lastName}`,
            sortable: false
        },
        {
            name: 'Add',
            selector: (row) => `${row}`,
            cell: (row) => {

                return (
                    <>
                        <Button className="btn btn-primary me-3" variant="outline-light" onClick={() => {
                             setListData2(
                                 [
                                     ...listData2,
                                     {id: row.id,
                                     firstName: row.firstName,
                                     lastName: row.lastName}
                                 ]
                             );
                            setUsersToAdd(
                                [
                                    ...usersToAdd,
                                    {id: row.id,}
                                ]
                            );
                            setListData(
                                listData.filter(a => a.id !== row.id)
                            );

                        }}>
                            <CiCirclePlus />
                        </Button>


                    </>
                );
            },
            sortable: false
        }
    ]
    const tableColumns2 = [
        {
            name: 'First name',
            selector: (row) => `${row.firstName}`,
            sortable: false
        },
        {
            name: 'Last name',
            selector: (row) => `${row.lastName}`,
            sortable: false
        },
        {
            name: 'Remove',
            selector: (row) => `${row}`,
            cell: (row) => {

                return (
                    <>
                        <Button className="btn btn-primary me-3" variant="outline-light" onClick={() => {
                            setListData2(
                                listData2.filter(a => a.id !== row.id)
                            )
                            setUsersToAdd(
                                usersToAdd.filter(a => a.id !== row.id)
                            )
                        }}>
                            <CiCircleMinus/>
                        </Button>


                    </>
                );
            },
            sortable: false
        }
    ]

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(50);
    const {state, dispatch} = useListActions();
    const [usersToAdd, setUsersToAdd] = useState([]);
    const [listData, setListData] = useState([]);
    const [listData2, setListData2] = useState([]);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onSubmit"
    });

    const {
        getData,
        loading,
        data
    } = useListData(`user/get-page-list?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`);



    useEffect(() => {
        getData(`user/get-page-list?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`);
    }, [pageSize, pageNumber]);


    useEffect(() => {
        if (state.reload) {
            getData(`user/get-page-list?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`);
        }
    }, [state]);

    // useEffect(() => {
    //     {if(data != null) {
    //         if (data.users != null) {
    //                 setListData(
    //                     [
    //                         ...listData,
    //                         {
    //
    //                         }
    //                     ]
    //                 );
    //         }
    //     }
    //     }
    // }, [data]);

    const handlePageChange = async (page) => {
        setPageNumber(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPageNumber(page);
        setPageSize(newPerPage);
    };



    // {if(data != null) {
    //     if (data.users != null) {
    //         data.users.forEach((element) =>
    //             setListData(
    //                 [
    //                     ...listData,
    //                     {
    //                         id: element.id,
    //                         firstName: element.firstName,
    //                         lastName: element.lastName,
    //                     }
    //                 ]
    //             )
    //         )
    //     }
    // }
    // }



    return (
        <>

            <Container className="container">
                <Row className="justify-content-center row">
                    <Card className="col-sm-6">
                        <CardHeader className="d-flex justify-content-end">

                            <input type="date" className="form-control" {...register("date", {
                                required: "Date is required!"
                            })} />
                            {errors && errors.date && (
                                <span className="text-danger">{errors.date.message}</span>
                            )}

                        </CardHeader>
                        <CardBody>
                            {data != null && <DataTable data={data.users}
                                                        columns={tableColumns}
                                                        striped={true}
                                                        noHeader={true}
                                                        pagination
                                                        paginationServer
                                                        progressPending={loading}
                                                        onChangePage={handlePageChange}
                                                        onChangeRowsPerPage={handlePerRowsChange}
                                                        progressComponent={<Spinner color="danger">Ocitavanje...</Spinner>}
                                                        highlightOnHover
                            />}
                        </CardBody>
                    </Card>
                    <Card className="col-sm-6">
                        <CardHeader className="d-flex justify-content-end">

                        </CardHeader>
                        <CardBody>
                            {listData2 != null && <DataTable data={listData2}
                                                        columns={tableColumns2}
                                                        striped={true}
                                                        noHeader={true}
                                                        pagination
                                                        paginationServer
                                                        progressPending={loading}
                                                        onChangePage={handlePageChange}
                                                        onChangeRowsPerPage={handlePerRowsChange}
                                                        progressComponent={<Spinner color="danger">Ocitavanje...</Spinner>}
                                                        highlightOnHover
                            />}
                        </CardBody>
                    </Card>
                </Row>
                <Button className="btn btn-primary me-3 mt-3" variant="outline-light" onClick={() => {
                    handleSubmit(async (data) => {
                        data.users = usersToAdd;
                        console.log(data);
                        let result = await post("/training/create", data);

                        if (result && result.status === 201) {
                            toast.success("Successfully created!");
                        }
                    })();
                }}>
                    Create Training
                </Button>
            </Container>
        </>
    )
}