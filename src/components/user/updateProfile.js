import React, { Component } from 'react';
import requester from '../../Infrastructure/remote';
import observer from '../../Infrastructure/observer';

export default class UpdateProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            email: null,
            avatar: null,
            user: null,
            message: ''
        }
    }

    componentDidMount = () => this.setUser();

    setUser = () => {

        requester.get('user', '', 'kinvey')
            .then(users => {
                let user = users.filter(u => u.username === localStorage.getItem('username'))[0]

                this.setState({
                    user: user
                })

                this.setState({
                    username: user.username
                })

                this.setState({
                    email: user.email
                })

                this.setState({
                    avatar: user.Avatar
                })

            });
    }

    handleChange = (ev) => {

        let key = ev.target.name;
        let value = ev.target.value;

        this.setState({
            [key]: value
        })

        console.log(key)
        console.log(value)
    }


    handleSubmit = (ev) => {

        ev.preventDefault();

        if (this.state.username === null || this.state.username.trim() === "") {
            this.setState({
                message: "Username must not be null or empty!"
            })
        }
        else if (this.state.username.length < 3) {
            this.setState({
                message: "Username length must not be less than 3 symbols!"
            })
        }
        else if (this.state.email === null || this.state.email.trim() === "") {
            this.setState({
                message: "Email must not be null or empty!"
            })
        }
        else if (this.state.email.length < 5) {
            this.setState({
                message: "Email length must not be less than 5 symbols!"
            })
        }
        else {

            requester.update('user', `${this.state.user._id}`, 'kinvey', {"username" : this.state.username, "email" : this.state.email, "Avatar" : this.state.avatar})
                .then(res => {

                    observer.trigger(observer.events.notification, { success: true, message: "Profile Updated Successfully !", type: 'success' })

                    this.setState({
                        message: "Profile Updated Successfully, Login again !"
                    })
                    
        
                    return this.props.history.push('/house-shop/user/logout')

                }).catch(err => {
                    console.log(err)
                    observer.trigger(observer.events.notification, { error: true, message: err.responseJSON.description, type: 'error' })
                    this.setState({
                        message: "Something went wrong !"
                    })
                });



        }
    }

    render() {

        if (this.state.user === null) {
            return null;
        }

        return (

            <main className="mt-3 forms">
                <br />
                <br />
                <h1 className="text-center">Update Your Profile</h1>
                <hr className="bg-secondary half-width" />

                <form className="mx-auto half-width" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username"><i className="fa fa-user"></i> Username <span className="red-star">*</span></label>
                        <input type="text" onChange={this.handleChange} className="form-control" id="username" value={this.state.username} placeholder="Username..." name="username" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="email"><i className="fa fa-envelope"></i> Email <span className="red-star">*</span></label>
                        <input type="email" onChange={this.handleChange} className="form-control" id="email" value={this.state.email} placeholder="Email..." name="email" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="avatar"><i className="fa fa-image"></i> Avatar (optional)</label>
                        <input type="url" onChange={this.handleChange} className="form-control" id="avatar" value={this.state.avatar} placeholder="Avatar..." name="avatar" />
                    </div>
                    <br />
                    <hr className="bg-secondary half-width" />
                    <div className="button-holder d-flex justify-content-center">
                        <button type="submit" className="btn btn-success"><span className="buttons-text text-capitalize"><i className="fa fa-sync-alt fa-spin"></i> Update</span></button>
                    </div>
                </form>
                <br />
                <p className="text-center danger">{this.state.message}</p>
                <br />
                <br />

            </main>
        )

    }
}