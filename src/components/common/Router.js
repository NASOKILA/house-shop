import React from 'react';
import { Route } from  'react-router-dom';

import Home from '../home/home';
import About from '../home/about';

import Login from '../user/login';
import Register from '../user/register';
import Logout from '../user/logout';

import Create from '../house/create';
import Details from '../house/datails';
import Edit from '../house/edit';
import Delete from '../house/delete';

import OrderCompleted from '../order/order-completed';
import ConfirmOrder from '../order/confirm-order';
import All from '../order/all';
import Profile from '../user/profile';
import MyOrders from '../order/my-orders';
import OrderDetails from '../order/order-details';



const Router = () => {

    return (<div>
        <Route path="/house-shop/" exact component={Home}/>
        <Route path="/house-shop/home" exact component={Home}/>
        <Route path="/house-shop/about" exact component={About}/>

        <Route path="/house-shop/user/login" exact component={Login}/>
        <Route path="/house-shop/user/register" exact component={Register}/>
        <Route path="/house-shop/user/logout" exact component={Logout}/>
        <Route path="/house-shop/user/profile/:id" exact component={Profile}/>

        <Route path="/house-shop/house/create" exact component={Create}/>
        <Route path="/house-shop/house/details/:id" exact component={Details}/>
        <Route path="/house-shop/house/edit/:id" exact component={Edit}/>
        <Route path="/house-shop/house/delete/:id" exact component={Delete}/>
        <Route path="/house-shop/house/confirm-order/:id" exact component={ConfirmOrder}/>

        <Route path="/house-shop/order/completed/:id" exact component={OrderCompleted}/>
        <Route path="/house-shop/order/all" exact component={All}/>
        <Route path="/house-shop/order/my" exact component={MyOrders}/>
        <Route path="/house-shop/order/details/:id" exact component={OrderDetails}/>
    </div>)
}


export default Router;
    