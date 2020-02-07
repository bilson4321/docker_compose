import React from 'react';
import contactListContext from '../Context/ContactListContext';
import ContactThumbnail from './ContactThumbnail';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
    content : {
       top                   : '50%',
       left                  : '50%',
       right                 : 'auto',
       bottom                : 'auto',
      marginRight           : '-50%',
      zIndex                : '10',
      transform             : 'translate(-50%, -50%)'
    }
  };
class ContactList extends React.Component {
    static contextType = contactListContext;

    constructor() {
        super();
        this.state = { "contact": this.context,
                        "detailView":false,
                        "modalView":{} 
                    };
    }
    
    openModal=(contact)=>
    {
        this.setState({"detailView":true,
                        "modalView":contact});
    }
    closeModal=()=>
    {
        this.setState({"detailView":!this.state.detailView});
    }
    render() {
        return (

            <div className="col-sm-9">
                <h2>Contacts</h2>
                <Modal
                    isOpen={this.state.detailView}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Detail">
                       <Link to={`/edit/${this.state.modalView.id}`}>Edit</Link>
                    <img></img>
                    <h1>Name: {this.state.modalView.name}</h1>  
                    <h1>Number: {this.state.modalView.phone_number}</h1>  
                    <h1>Address: {this.state.modalView.address}</h1>  
                </Modal>
                {this.context.list.map((value) => { 
                                return (
                                    <li className="list-unstyled" key={value.id}>
                                        <ContactThumbnail contact={value} onClick={()=>{this.openModal(value)}}/>
                                    </li>
                                    );
                                })}
            </div>

        );
    }
}

export default ContactList;