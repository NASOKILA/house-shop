import React, { Component } from 'react'
import requester from '../../Infrastructure/remote';

export default class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            house: null
        }
    }

    componentDidMount = () => this.sethouseState();

    sethouseState = () => {
        let id = this.props.match.params.id;

        requester.get('appdata', 'Houses/' + id, 'kinvey')
            .then(house => {
                this.setState({
                    house
                });

            })
            .catch(err => console.log(err));
    }

    render() {

        if (this.state.house !== null) {


            if (this.state.house.Sold === 'true') {

                return (
                    <div>

                        <main className="mt-3 mb-5">
                            <br /><br />

                            <div className="jumbotron detailsData">

                                <h1 className="text-center text-uppercase">Details Page</h1>
                                <hr className="hr-2 bg-dark" />

                                <br />
                                <br />

                            <h1 className="text-center">Location</h1>
                            <p className="text-center details-labels">{this.state.house.Location}</p>
                            <br />

                            <h1 className="text-center">Price</h1>
                            <p className="text-center details-labels"> {this.state.house.Price} $</p>
                            <br />

                            <h1 className="text-center">Size</h1>
                            <p className="text-center details-labels"> {this.state.house.Size} Square Meters</p>
                            <br />

                            <h1 className="text-center">Status</h1>
                            <p className="text-center details-labels">{this.state.house.Sold === 'true' ? 'Sold' : 'Avaliable'}</p>
                            <br />

                            <h1 className="text-center">Image</h1>
                            <img className="image-details" src={this.state.house.Image} alt="No House Img" />
                            <br />
                            <br />

                            <h1 className="text-center">Description</h1>
                            <p className="text-center mt-4 details-labels">
                                {this.state.house.Description}
                            </p>

                            </div>


                            {localStorage.getItem("admin") === 'false'
                                ? ""
                                : <div className="jumbotron detailsActions">
                                    <h1 className="text-center">Actions</h1>
                                    <hr className="hr-2 bg-dark" />
                                    <div className="product-action-holder mt-4 d-flex justify-content-around">

                                        {this.state.house.Sold === "false"
                                            ? <a className="btn btn-lg btn-success housebuttons" href={"/house-shop/house/confirm-order/" + this.state.house._id}><span className="buttons-text text-capitalize"><i className="fa fa-shopping-cart"></i> Order</span></a>
                                            : ""}


                                        {localStorage.getItem("admin") === 'true'
                                            ? <a className="btn btn-lg btn-danger housebuttons" href={"/house-shop/house/delete/" + this.state.house._id}><span className="buttons-text text-capitalize"><i className="fa fa-trash-alt"></i> Delete</span></a>
                                            : ""}
                                    </div>
                                </div>}
                        </main>
                        <br />
                        <br />
                    </div >
                )
            }


            return (
                <div>
                    <main className="mt-3 mb-5">
                        <br />
                        <br />
                        <div className="jumbotron detailsData">

                            <h1 className="text-center text-uppercase">Details Page</h1>
                            <hr className="hr-2 bg-dark" />

                            <br />
                            <br />

                            <h1 className="text-center">Location</h1>
                            <p className="text-center details-labels">{this.state.house.Location}</p>
                            <br />

                            <h1 className="text-center">Price</h1>
                            <p className="text-center details-labels"> {this.state.house.Price} $</p>
                            <br />

                            <h1 className="text-center">Size</h1>
                            <p className="text-center details-labels"> {this.state.house.Size} Square Meters</p>
                            <br />

                            <h1 className="text-center">Status</h1>
                            <p className="text-center details-labels">{this.state.house.Sold === 'true' ? 'Sold' : 'Avaliable'}</p>
                            <br />

                            <h1 className="text-center">Image</h1>
                            <img className="image-details" src={this.state.house.Image} alt="No House Img" />
                            <br />
                            <br />

                            <h1 className="text-center">Description</h1>
                            <p className="text-center mt-4 details-labels">
                                {this.state.house.Description}
                            </p>

                        </div>


                        <div className="jumbotron detailsActions">
                            <h3 className="text-center">Actions</h3>
                            <hr className="hr-2 bg-dark" />
                            <div className="product-action-holder mt-4 d-flex justify-content-around">

                                {this.state.house.Sold === "false"
                                    ? <a className="btn btn-lg btn-success housebuttons" href={"/house-shop/house/confirm-order/" + this.state.house._id}><span className="buttons-text text-capitalize"><i className="fa fa-shopping-cart"></i> Order</span></a>
                                    : ""}

                                {localStorage.getItem("admin") === 'true'
                                    ? <a className="btn btn-lg btn-warning housebuttons" href={"/house-shop/house/edit/" + this.state.house._id}><span className="buttons-text text-capitalize"><i className="fa fa-edit"></i> Edit</span></a>
                                    : ""}

                                {localStorage.getItem("admin") === 'true'
                                    ? <a className="btn btn-lg btn-danger housebuttons" href={"/house-shop/house/delete/" + this.state.house._id}><span className="buttons-text text-capitalize"><i className="fa fa-trash-alt"></i> Delete</span></a>
                                    : ""}
                            </div>
                        </div>
                    </main>
                </div>
            )
        }
        return (<div></div>)
    }
}



