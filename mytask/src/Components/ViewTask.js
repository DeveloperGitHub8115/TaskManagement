import { useEffect, useState } from "react";
import { Alert, Container, Row, Col, Card, Button, Dropdown} from "react-bootstrap";
import { deleteTask, getAlldata, MarkTask } from "../TaskServices/taskService";

export function ViewTask() {
   const [view, setview] = useState([])
   useEffect(() => {
      fetchData('All');

   }, [])

   const fetchData = async (url) => {
      const response = await getAlldata(url);
      setview(response.data);
   }

   return (

      <>
 
         <Container className="mt-5 text-center">
            <Alert variant='primary'>List of all task</Alert>
         </Container>
         <Container>
            <Container className="mb-3">
               <Dropdown onSelect={(key, event) => {
                  console.log(event.target.innerHTML);
                  fetchData(event.target.innerHTML);
               }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Select tasks
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     <Dropdown.Item>All</Dropdown.Item>
                     <Dropdown.Item>pending</Dropdown.Item>
                     <Dropdown.Item>completed</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>

            </Container>
            <Row>
               {
                  view.map((task) => {
                     return (
                        <Col lg={4}>
                           <Card className='mb-3'>
                              <Card.Body>
                                 <Alert variant={task.isCompleted ? "success" : "danger"}>{task.isCompleted ? "Completed" : "Pending"}</Alert>
                                 <Card.Title>{task.name}</Card.Title>
                                 <Card.Text>{task.description}</Card.Text>
                                 {!task.isCompleted ? <Button className="success btn btn-sm"
                                    onClick={async () => {
                                       
                                       await MarkTask(task._id);
                                       fetchData('All');

                                    }}

                                 >Complete</Button> : null}
                                 <Button variant="danger" className="btn btn-sm ms-3"
                                    onClick={async () => {
                                       await deleteTask(task._id);
                                       fetchData('All')
                                    }}
                                 >Remove</Button>
                              </Card.Body>
                           </Card>

                        </Col>

                     );
                  })

               }

            </Row>

         </Container>


      </>
   );
}