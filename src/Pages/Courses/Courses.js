import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useLoaderData } from 'react-router-dom';
import CourseContainer from '../../Components/CourseContainer/CourseContainer';
import CourseName from '../../Components/CourseName/CourseName';


const Courses = () => {
    const data = useLoaderData();

    const [index,handleIndex] = useState(0);

    return (
        <Row>
            <Col sm={4} className="border bg-light">
                <h3 className='text-center my-3'>Courses</h3>
                {
                    data.map((value,idx)=><CourseName key={idx} name={value.Name} handleIndex={handleIndex} index={idx}>{value?.Element}</CourseName>)
                }
            </Col>
            <Col sm={8}>
                <CourseContainer title={data[index].Name} courses={data[index].courses}/>
            </Col>
        </Row>
    );
};

export default Courses;