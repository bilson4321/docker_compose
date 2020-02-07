import React from 'react';
import ContactList from './ContactList';
import UserDetail from './UserDetail';

import SearchIcon from './../Images/search-icon.png';

class HomePage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row bg-secondary">
                        <div className="col-sm-9">
                            <h2 className="pl-2">Contacts</h2>
                        </div>
                        <div className="col-sm-3">
                            <img src={SearchIcon} className="img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <UserDetail />
                        <ContactList />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;