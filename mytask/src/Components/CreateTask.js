import { StatusCodes } from "http-status-codes";
import { useState } from "react";
import { Container, Alert, Row, Col, Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { savedata } from "../TaskServices/taskService";

export function CreateTask() {
    const [task, setTask] = useState({})
    const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value });
        console.log(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(task);
        const response = await savedata(task);
        if (response.status === StatusCodes.CREATED) {
            toast.success("Task Created Successfully")
        } else {
            toast.error("error in creating task..")

        }

    }
    return (
        <>
            <Container className="mt-3 text-center float:none margin:auto">
                <Alert variant="primary">Create A  New Task</Alert>
            </Container>
            <Toaster />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text " placeholder="Enter Name" name="name" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text " placeholder="Enter description" name="description" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="Date" name="deadline" onChange={handleChange} />
                            </Form.Group>
                            <Button type="submit">create</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>

    );
}