import React, { Component } from 'react'
import requester from '../../Infrastructure/remote';


export default class Edit extends Component {

    constructor(props){
        super(props);

        this.state = {
            Location: null,
            Price: null,
            Size: null,
            Image: null,
            Description: null,
            message: ''
        }
    }


    componentDidMount = () => this.sethouseState();

    sethouseState = () => {
        let id = this.props.match.params.id;

        requester.get('appdata', 'Houses/' + id, 'kinvey')
            .then(house => {
                this.setState({
                    Location: house.Location,
                    Price: house.Price,
                    Size: house.Size,
                    Image: house.Image,
                    Description: house.Description
                });
            })
            .catch(err => console.log(err));
    }

    handleChange = (ev) => {
            
        let key = ev.target.name;
        let value = ev.target.value;    
        this.setState({
            [key]:value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        if (this.state.Location === null || this.state.Location.trim() === ""){
            this.setState({
                message: "Location cannot be null or empry string !"
            })
        }
        else if(this.state.Price === null || this.state.Price.trim() === ""){
            this.setState({
                message: "Price cannot be null or empry string !"
            })
        }
        else if(Number(this.state.Price) < 0){
            this.setState({
                message: "Price cannot be a number less than 0 !"
            })
        }
        else if(this.state.Size === null || this.state.Size.trim() === "") {
            this.setState({
                message: "Size cannot be null or empry string !"
            })
        }
        else if(Number(this.state.Size) < 0){
            this.setState({
                message: "Size cannot be a number less than 0 !"
            })
        }
        else if(this.state.Description === null || this.state.Description.trim() === ""){
            this.setState({
                message: "Description cannot be null or empry string !"
            })
        }
        else
        {
            let id = this.props.match.params.id;
            
            requester.update('appdata', 'Houses/' + id, 'kinvey', {
                'Location' : this.state.Location, 
                'Size' : this.state.Size, 
                'Price': this.state.Price,
                'Image': this.state.Image,
                'Description': this.state.Description,
                'Sold' : 'false'

            })
            .then(res => {
                
                this.setState({
                    message: "House Updated Successfully !"
                })

                return this.props.history.push('/house-shop')
            }).catch(err => {
                console.log(err)
                this.setState({
                    message: "Something Went Wrong !"
                })
            });
        }
    }

    render() {
        
        if(this.state.Location !== null){

            return (<div>
                <main className="mt-3 forms">
                <br/>
                <br/>
                    <h1 className="text-center text-uppercase">Update House</h1>
                    <hr className="bg-secondary half-width" />
                    <form className="mx-auto half-width" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Location <span className="red-star">*</span></label>
                            <input type="text" onChange={this.handleChange} value={this.state.Location} className="form-control" id="name"  placeholder="Location..." name="Location" />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="price">Price <span className="red-star">*</span></label>
                            <input type="number" onChange={this.handleChange} value={this.state.Price} className="form-control" id="price" placeholder="Price..." name="Price" />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="description">Size <span className="red-star">*</span></label>
                            <input type="text" onChange={this.handleChange} value={this.state.Size} className="form-control" id="size" placeholder="Size meters..." name="Size" />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="description">Image (optional)</label>
                            <input type="text" onChange={this.handleChange} value={this.state.Image} className="form-control" id="image" placeholder="Image..." name="Image" />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="description">Description <span className="red-star">*</span></label>
                            <textarea  rows="4" cols="50" type="text"  value={this.state.Description} onChange={this.handleChange} className="form-control" id="description" placeholder="Description..." name="Description"></textarea>
                        </div>
                        <br/>
                        <hr className="bg-secondary half-width" />

                        <div className="button-holder d-flex justify-content-center">
                            <button type="submit" className="btn btn-lg btn-warning"><span className="buttons-text"><i className="fa fa-sync-alt fa-spin"></i> Update</span></button>
                        </div>

                    </form>
                </main>
                <br/>
                <h1 className="text-center danger">{this.state.message}</h1>
                <br/>
                <br/>
            </div>)
        }

        return (<div></div>)
    }
}
