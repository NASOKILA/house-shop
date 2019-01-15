import React, { Component } from 'react'
import requester from '../../Infrastructure/remote';

export default class OrderDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            order: null
        }
    }

    deleteOrder = () => {
        let id = this.props.match.params.id;

        requester.remove('appdata', 'Orders/' + id, 'kinvey')
            .then(() => {
                console.log("Order deleted !");

                return this.props.history.push('/')

            })
            .catch(err => console.log(err));
    }

    componentDidMount = () => this.sethouseState();

    sethouseState = () => {
        let id = this.props.match.params.id;

        requester.get('appdata', 'Orders/' + id, 'kinvey')
            .then(order => {
                console.log(order)
                this.setState({
                    order
                });
            })
            .catch(err => console.log(err));
    }

    render() {

        if (this.state.order !== null) {

            return (
                <div>
                    <br />
                    <br />
                    <main className="mt-3 mb-5">

                        <div className="jumbotron detailsData">
                            <h1 className="text-uppercase">Order Details Page</h1>
                            <hr className="hr-2 bg-dark" />
                            <br />

                            <h1 className="text-center">Customer: </h1>
                            <span className="names details-labels">{this.state.order.Customer}</span>
                            <br />
                            <br />

                            <h1 className="text-center">Ordered On: </h1>
                            <span className="names details-labels">{this.state.order.OrderedOn}</span>
                            <br />
                            <br />

                            <h1 className="text-center">House Location: </h1>
                            <span className="names details-labels">{this.state.order.Product.Location}</span>
                            <br />
                            <br />

                            <h1 className="text-center">Price:</h1>
                            <span className="names details-labels">{this.state.order.Product.Price} $</span>
                            <br />
                            <br />

                            <h1 className="text-center">Size: </h1>
                            <span className="names details-labels">{this.state.order.Product.Size} s.m.</span>
                            <br />
                            <br />

                            <h1 className="text-center">House:</h1>
                            <img className="house-image details-labels" src={this.state.order.Product.Image} alt="No house img avaliable."/>
                            <br />
                            <br />

                            <h1 className="text-center">Description:</h1>
                            <span className="names details-labels">{this.state.order.Product.Description}</span>
                            <br />
                            <br />
                        </div>

                        <div className="jumbotron detailsActions">
                            <h1 className="text-center">Actions</h1>
                            <hr className="hr-2 bg-dark" />
                            <div className="product-action-holder mt-4 d-flex justify-content-around">
                                <a className="btn btn-lg btn-info housebuttons" href="/house-shop"><span className="buttons-text text-capitalize"><i className="fa fa-home"></i> Home</span></a>
                                <button className="btn btn-lg btn-danger housebuttons" onClick={this.deleteOrder}><span className="buttons-text text-capitalize"><i className="fa fa-trash-alt"></i> Delete</span></button>
                            </div>
                        </div>

                    </main> 
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}
