import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleUser from './SingleUser'

const UserList = ({ sendData }) => {
    return (
        <Container>
            <Row className='g-3 mt-3'>
                {sendData.map(item => (
                    <SingleUser key={item.id} alldata={item} />
                ))}
            </Row>
        </Container>
    )
}

export default UserList