import React from 'react';
import UserImage from './../Images/user.png';

class UserDetail extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="col-sm-3">
                <div className="p-5">
                    <img src={UserImage} className="rounded-circle img-fluid"></img>
                </div>
                <h1 className="text-center">Hari</h1>
            </div>
        );
    }
}

export default UserDetail;