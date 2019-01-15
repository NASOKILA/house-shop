import React, { Component } from 'react';
import requester from '../../Infrastructure/remote';

export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            orders: null
        }
    }

    componentDidMount = () => this.getUser()

    getUser = () => {

        let id = this.props.match.params.id;

        if (id.length !== 24) {
            requester.get('user', '', 'kinvey')
                .then(users => {
                    let user = users.filter(u => u.username === localStorage.getItem('username'))[0]
                    
                    requester.get('appdata', 'Orders', 'kinvey')
                        .then(orders => {

                            this.setState({
                                user,
                                orders
                            });

                        })
                        .catch(err => console.log(err));

                })
                .catch(err => console.log(err));
        }
        else {

            requester.get('user', id, 'kinvey')
                .then(user => {
                    requester.get('appdata', 'Orders', 'kinvey')
                        .then(orders => {

                            this.setState({
                                user,
                                orders
                            });

                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        }
    }

    render() {

        if (this.state.orders === null || this.state.user === null) {
            return null;
        }


        return (

            <main className="mt-3 mb-5">

                <br />
                <br />
                <div className="card border-secondary mb-3 detailsData">

                    <h1 className="card-header text-uppercase">User Profile Page</h1>
                    <br />
                    <div className="card-body">
                        <h1 className="card-title">Username</h1>
                        <p className="card-text details-labels names">{this.state.user.username}</p>
                        <br />
                        <h1 className="card-title">Email</h1>
                        <p className="card-text display-6 details-labels">{this.state.user.email}</p>
                        <br />
                        <h1 className="card-title">Houses</h1>
                        <p className="card-text display-6 details-labels">{this.state.orders.filter(o => o.Customer === this.state.user.username).length}</p>
                        <br />
                        <h1 className="card-title">Role</h1>
                        <div className="product-description-holder">
                            <p className="card-text display-6 details-labels">
                                {this.state.user._kmd.roles === undefined ? "User" : "Admin"}
                            </p>
                            <br />
                        </div>
                        <h1 className="card-title">Avatar</h1>

                        <img className="user-image" src={this.state.user.Avatar === undefined || this.state.user.Avatar === "" ? "https://tiohugo.rs.gov.br/wp-content/uploads/sites/10/2014/07/avatar.png" : this.state.user.Avatar} alt="User img not avaliable"/>
                    </div>
                </div>
                <br />
                    <div className="jumbotron detailsActions">
                        <h3 className="text-center">Actions</h3>
                        <hr className="hr-2 bg-dark" />
                        <div className="product-action-holder mt-4 d-flex justify-content-around">
                            {/*<a className="btn btn-lg btn-primary housebuttons" href={"/house-shop/user/resetPassword/" + this.state.user._id}><span className="buttons-text"> Reset Password <i className="fa fa-key"></i></span></a>*/}
                            <a className="btn btn-lg btn-info housebuttons" href={"/house-shop"}><span className="buttons-text"> Home <i className="fa fa-home"></i></span></a>
                            <a className="btn btn-lg btn-warning housebuttons" href={"/house-shop/user/updateProfile/" + this.state.user._id}><span className="buttons-text"> Update Profile <i className="fa fa-user-circle"></i></span></a>
                        </div>
                    </div>
            </main>
        )

    }
}