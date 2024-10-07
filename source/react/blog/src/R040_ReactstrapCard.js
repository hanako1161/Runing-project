import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import mayImg from './img/may.jpg';

const R040_ReactstrapCard = () => {
    return (
        <div>
            <Card>
                <CardImg top height="200px" src="https://han.gl/rxRfr" alt="Description of the image" />
                <CardBody>
                    <CardTitle>Card 제목</CardTitle>
                    <CardSubtitle>Card 부제목</CardSubtitle>
                    <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                    <Button>버튼</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default R040_ReactstrapCard;
