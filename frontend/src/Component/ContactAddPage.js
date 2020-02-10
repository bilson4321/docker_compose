import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


import contactListContext from '../Context/ContactListContext';

class ContactAddPage extends React.Component {
    static contextType = contactListContext;
    constructor()
    {
        super();
        this.state={
            name:'',
            phone_number:'',
            image:'',
            address:''
        }
    }
    render() {
        return (
            <div className="container">
                <Link to='/' onClick={this.updateParent}>
                    Back
                </Link>
                <h2>Stacked form</h2>
                <form onSubmit={this.addContact}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone Number:</label>
                        <input type="text" className="form-control" id="number" placeholder="Enter your number" value={this.state.number} onChange={this.handleInputChange} name="phone_number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input type="text" className="form-control" id="image" placeholder="Enter image" value={this.state.image} onChange={this.handleInputChange} name="image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter address" value={this.state.address} onChange={this.handleInputChange} name="address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-danger" >Reset</button>
                </form>
            </div>

        );
    }
    addContact=(event)=>
    {
        event.preventDefault();
        
        axios.post('http://172.18.0.1:8080/addContact',this.state)
        .then(function(response)
        {
            console.log("Response",response);
        });

    }
    handleInputChange=(event)=>
    {
        let value=event.target.value;
        let name=event.target.name;
        this.setState({[name]:value});
    }
    updateParent=()=>
    {
        this.context.updateParent();
    }
}
export default ContactAddPage;
