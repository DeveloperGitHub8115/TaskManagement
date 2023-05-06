import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap"
import { Alert, Container, Card, Row, Col,Button} from "react-bootstrap";
import { getAlldata } from "../TaskServices/taskService";

export function Dashboard() {
    const [pendingTasks, setPendingTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    useEffect(() => {
        fetchPendingTasks();
        fetchCompletedTasks();
    }, []);

    const fetchPendingTasks = async () => {
        const response = await getAlldata('pending');
        setPendingTasks(response.data.length);
    }

    const fetchCompletedTasks = async () => {
        const response = await getAlldata('completed');
        setCompletedTasks(response.data.length);
    }
    return (
        <>
            <Container className="mt-3 text-center">
                <Alert variant="primary">WelCome To Task-Manager</Alert>
            </Container>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Total-Tasks</Card.Title>
                                <Card.Text>
                                   {pendingTasks + completedTasks} 
                                </Card.Text>
                                <LinkContainer to='/view-task'><Button variant="primary">View-Tasks</Button></LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Pending-Tasks</Card.Title>
                                <Card.Text>
                                   {pendingTasks} 
                                </Card.Text>
                                <Button variant="danger">View-Tasks</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className>
                            <Card.Body>
                                <Card.Title>Completed-Tasks</Card.Title>
                                <Card.Text>
                                   {completedTasks} 
                                </Card.Text>
                                <Button variant="success">View-Tasks</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}