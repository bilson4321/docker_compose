import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


import contactListContext from '../Context/ContactListContext';

class ContactEditPage extends React.Component {
    static contextType = contactListContext;
    constructor()
    {
        super();
        this.state={
            contactID:'',
            name:'',
            phone_number:'',
            image:'',
            address:''
        }
    }
    componentDidMount () {
        const { id } = this.props.match.params;
    
        let query="http://172.18.0.1:8080/contacts/"+id;
        console.log("query",query);
        axios.get(query).then(value => {
        this.setState({ contactID: value.data.id,
                        name:value.data.name ,
                        phone_number:value.data.phone_number,
                        image:value.data.image,
                        address:value.data.address});
            console.log(value.data);
    });
    }
    render() {
        return (
            <div className="container">
                <Link to='/' onClick={this.updateParent}>
                    Back
                </Link>
                <h2>Stacked form</h2>
                <form onSubmit={this.editContact}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Enter name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone Number:</label>
                        <input type="text" className="form-control" id="number" value={this.state.phone_number} onChange={this.handleInputChange} placeholder="Enter your number" name="phone_number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input type="text" className="form-control" id="image" value={this.state.image} onChange={this.handleInputChange} placeholder="Enter image" name="image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" className="form-control" id="address" value={this.state.address} onChange={this.handleInputChange} placeholder="Enter address" name="address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
    editContact=(event)=>
    {
        event.preventDefault();
        
        axios.put('http://192.168.65.135:8080/editContact/'+this.state.contactID,this.state)
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
export default ContactEditPage;
