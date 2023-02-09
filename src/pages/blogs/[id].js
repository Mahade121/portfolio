

export const getStaticPaths = async () =>{
    const res = await fetch('http://127.0.0.1:8000/blog/')
    const data = await res.json()

    const paths = data.map(blog =>{
        return {
            params: {id: blog.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('http://127.0.0.1:8000/blog/' + id)
    const data = await res.json()
    
    return {
        props: {blog:data}
    }
}


import Navbar from '@/components/Navbar';
import Card from 'react-bootstrap/Card';

const Details = ({blog}) =>{
    return(
        <>
    <Navbar></Navbar>
    <Card className='pt-5'>
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <p dangerouslySetInnerHTML={{__html: blog.description}}></p>
      </Card.Body>
    </Card>
        </>
    )
}

export default Details