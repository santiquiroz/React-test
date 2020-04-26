import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (

        <div className="row">
            <div className="col-md-5 col-sm-12 col-xm-12 m-1">
                <Card key={dish.id}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />

                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-5 col-sm-12 col-xm-12 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <RenderComments comments={dish.comments}/>
                </ul>
            </div>
        </div>

    );
}

function RenderComments({ comments }) {
    if (comments != null) {
        let comentarios = comments.map((com) => {

            return (
                <li key={com.id}>
                    <span className="text">{com.comment} <p>-- {com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</p></span>
                </li>
            );
        });
        return (comentarios);
    }
    else {
        return (<div></div>);
    }


}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <RenderDish dish={props.dish}></RenderDish>
            </div>
        );

    }

    else
        return (
            <div></div >
        );

}

export default DishDetail;