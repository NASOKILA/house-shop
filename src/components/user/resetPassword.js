import React, { Component } from 'react';
import requester from '../../Infrastructure/remote';

export default class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            orders: null
        }
    }

    componentDidMount(){
        
    }

    render(){
        return <div>RESET PASS</div> 
    }
}