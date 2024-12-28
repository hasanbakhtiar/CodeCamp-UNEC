import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleUser = ({alldata}) => {
    return (
        <Col sm="12" md="3">
            <Card >
                <Card.Img variant="top" src={alldata.avatar_url} />
                <Card.Body>
                    <Card.Title>{alldata.login}</Card.Title>
                    <Card.Text>
                        {alldata.node_id}
                    </Card.Text>
                    <a className="btn btn-dark" target='_blank' href={alldata.html_url}>Go profile</a>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleUser