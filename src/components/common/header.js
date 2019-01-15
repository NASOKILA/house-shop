import React, { Component } from 'react'
export default class header extends Component {


    componentDidMount() {
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }


    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    render() {


        if (localStorage.getItem('admin') === 'true') {

            return (
                <div className="headerDiv">
                    <header>

                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="/house-shop/">HouseShop</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarColor02">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop"><i className="fa fa-home"></i> Home</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/about"><i className="fa fa-map-marker-alt"></i> About</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/user/profile/:id"><i className="fa fa-user-circle"></i> Profile</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/order/my"><i className="fa fa-shopping-cart"></i> My Orders</a>
                                    </li>

                                </ul>

                                <div className="dropdown">
                                    <button onClick={this.myFunction} className="dropbtn text-uppercase admin-nav-link">[ <i className="fas fa-lock"></i> Admin ]</button>
                                    <div id="myDropdown" className="dropdown-content">
                                        <a className="nav-link" href="/house-shop/house/create"><i className="fas fa-plus"></i> Create House</a>
                                        <a className="nav-link" href="/house-shop/order/all"><i className="fas fa-shopping-cart"></i> All Orders</a>
                                    </div>
                                </div>

                                <ul className="navbar-nav left-side">
                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/user/logout"><i className="fas fa-sign-out-alt"></i> Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </header>
                </div>)
        }

        if (localStorage.getItem('username')) {
            return (

                <div className="headerDiv">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="/house-shop/">HouseShop</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarColor02">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/"><i className="fa fa-home"></i> Home</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/about"><i className="fa fa-map-marker-alt"></i> About</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/user/profile/:id"><i className="fa fa-user-circle"></i> Profile</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/order/my"><i className="fa fa-shopping-cart"></i> My Orders</a>
                                    </li>

                                </ul>

                                <ul className="navbar-nav left-side">
                                    <li className="nav-item">
                                        <a className="nav-link nav-link-white" href="/house-shop/user/logout"><i className="fa fa-sign-out-alt"></i> Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>)
        }


        return (
            <div className="headerDiv">
                <header className="header">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav">
                        <a className="navbar-brand" href="/house-shop/">HouseShop</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item">
                                    <a className="nav-link nav-link-white" href="/house-shop"><i className="fa fa-home"></i> Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link nav-link-white" href="/house-shop/about"><i className="fa fa-map-marker-alt"></i> About</a>
                                </li>
                            </ul>

                            <ul className="navbar-nav left-side">
                                <li className="nav-item">
                                    <a className="nav-link nav-link-white" href="/house-shop/user/login"><i className="fa fa-sign-in-alt"></i> Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-white" href="/house-shop/user/register"><i className="fa fa-registered"></i> Register</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )

    }
}

