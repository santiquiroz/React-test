import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments != null) {
            let comentarios = comments.map((com) => {

                return (
                    <li key={com.id}>
                        <span className="text">{com.comment} <p>-- {com.author}, {com.date}</p></span>
                    </li>
                );
            });
            return (comentarios);
        }
        else {
            return (<div></div>);
        }

    }

    renderDish(dish) {


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
                        {this.renderComments(dish.comments)}
                    </ul>
                </div>
            </div>

        );
    }

    render() {

        if (this.props.dish != null) {
            return (this.renderDish(this.props.dish));

        }

        else
            return (
                <div></div >
            );

    }
}

export default DishDetail;