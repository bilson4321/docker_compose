import React from 'react';

class ContactThumbnail extends React.Component
{
    render()
    {
        return(
            <div className='container-fluid' onClick={()=>{this.props.onClick()}}>
                <div className='p-3 bg-primary border-bottom'>
                    <label>{this.props.contact.name}</label>
                </div>
            </div>
        );
    }
}

export default ContactThumbnail;