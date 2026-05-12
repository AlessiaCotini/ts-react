import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import ClassComponent from './components/ClassComponent'
function App() {
  return (
    <>
    <Container fluid>
      <Row className='justify-content-center'>
        <Col xs={12} md={6} lg={4}>
          <ClassComponent content="Stiamo passando delle props al componenete"/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
