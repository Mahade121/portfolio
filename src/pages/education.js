
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';


export default function education() {
    const [education,setEducation] = useState([]);

    const getEducation =()=>{
        axios.get('http://127.0.0.1:8000/education/').then((response) =>{
            const myData = response.data;
            setEducation(myData)
        })
    };
    useEffect(()=> getEducation(), []);

    return (
        <>
            <Navbar></Navbar>
    <br /><br /><br /><br />
        <Container>
            <Row>
                {education.map((c,i) =>{
                    return (
                        <Col xs={12} lg={10} className='mx-auto'>
                        <Card style={{width:'95%', 'z-index':'-33', height:'100vh'}}>  
                            <Card.Body>
                            <Card.Title className='text-dark text-center border-bottom'>{c.title}</Card.Title>               
                            <section className='text-dark' dangerouslySetInnerHTML={{__html: c.description}} />
                            </Card.Body>                
                        </Card>
                    </Col>
                    )
                })}
                </Row>     
        </Container>
        </>
    )
}
