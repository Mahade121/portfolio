export const getStaticPaths = async () =>{
    const res = await fetch('http://127.0.0.1:8000/note/')
    const data = await res.json()

    const paths = data.map(note =>{
        return {
            params: {id: note.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('http://127.0.0.1:8000/note/' + id)
    const data = await res.json()
    
    return {
        props: {note:data}
    }
}


import Navbar from '@/components/Navbar';
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const Details = ({note}) =>{
    return(
        <>
    <Navbar></Navbar>
    <br /><br /><br /><br />
    <Container>
        <Row>
            <Col xs={12} lg={8} className='mx-auto'>
                <Card style={{width:'95%', 'z-index':'-33'}}>  
                   <Card.Img variant="top" src={note.image} /> 
                    <Card.Body>
                    <Card.Title className='text-dark'>{note.title}</Card.Title>                  
                    <section className='text-dark' dangerouslySetInnerHTML={{__html: note.description}} />
                    </Card.Body>                
                </Card>
            </Col>
            </Row>
       
    </Container>

    

        </>
    )
}

export default Details