import React, { Component } from 'react'

export default class Error extends Component {

    render() {


        return (
            <div className="text-white  text-center">
            <br/>
            <div className="jumbotron detailsActions bg-dark left">
                        <p className="text-center display-3 text-uppercase">404 Page Not Found</p>
                        <hr className="hr-2 bg-white" />
                        <div className=" product-action-holder mt-4 d-flex justify-content-around forms">
                            <a className="btn btn-lg btn-primary buttons-text" href={"/house-shop"}><i className="fa fa-home"></i> Back to home</a>
                        </div>
                    </div>
            </div>

        )
    }
}