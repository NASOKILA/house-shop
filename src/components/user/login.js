import React, { Component } from 'react'
import requester from '../../Infrastructure/remote'

import observer from '../../Infrastructure/observer';

import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            message: ''
        }
    }

    handleChange = (ev) => {

        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;

        this.setState({
            [fieldName]: fieldValue
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();


        if(this.state.username === null || this.state.username.trim() === ""){
            this.setState({
                message : "Username must not be null or empty!"
            })
        }
        else if(this.state.password === null || this.state.password.trim() === "")
        {
            this.setState({
                message: "Password must not be null or empty!"
            })
        }
        else {

        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                sessionStorage.setItem('authtoken', res._kmd.authtoken);

                localStorage.setItem('username', res.username);

                if (res._kmd.roles) {
                    localStorage.setItem('admin', 'true');
                } else {
                    localStorage.setItem('admin', 'false');
                }

                observer.trigger(observer.events.loginUser, res.username);

                observer.trigger(observer.events.notification, { success: true, message: "LoggedIn Successfully!", type: 'success' })

                this.setState({
                    message: "LoggedIn Successfully!"
                });

                return this.props.history.push('/house-shop')
            })
            .catch(res => {

                observer.trigger(observer.events.notification, { error: true, message: "Invalid User Credentials!", type: 'error' })

                this.setState({
                    message: "Invalid User Credentials!"
                });

            });
        
        }
    }


    render() {

        if (localStorage.getItem('username')) {
            return <Redirect to='/' />
        }

        return (

            <div>
                <br />
                <br />

                <main className="mt-3 forms">
                    <h1 className="text-center">Login</h1>
                    <hr className="bg-secondary half-width"/>
                    <form className="mx-auto half-width" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username"><i className="fa fa-user"></i> Username <span className="red-star">*</span></label>
                            <input type="text" onChange={this.handleChange} className="form-control" id="username" placeholder="Username..." name="username" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="password"><i className="fa fa-key"></i> Password <span className="red-star">*</span></label>
                            <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password..." name="password" />
                        </div>
                        <br/>
                        <hr className="bg-secondary half-width" />
                        <div className="button-holder d-flex justify-content-center">
                            <button type="submit" className="btn btn-success"><span className="buttons-text text-capitalize"><i className="fa fa-sign-in-alt"></i> Login</span></button>
                        </div>
                    </form>
                </main>
                <br />
                <p className="text-center danger">{this.state.message}</p>
                <br />
                <br />

            </div>
        )
    }
}
