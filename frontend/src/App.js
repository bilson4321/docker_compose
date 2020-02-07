import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Component/HomePage";
import contactListContext from "./Context/ContactListContext";
import ContactAddPage from "./Component/ContactAddPage";
import ContactEditPage from "./Component/ContactEdit";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contactList: []
    };
  }
  componentDidMount() {
    axios.get("http://192.168.65.135:8080/contacts").then(value => {
      this.setState({ contactList: value.data });
    });
  }
  componentDidUpdate(){
    console.log("updated");
  }
  updateContact=()=>{
    axios.get("http://192.168.65.135:8080/contacts").then(value => {
      this.setState({ contactList: value.data });
    });
  }
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
        

        <Switch>
        <contactListContext.Provider value={{
                                                  "list":this.state.contactList,
                                                  "updateParent":this.updateContact
                                                }}>
          <Route exact path="/">
            
              <HomePage />
           
          </Route>
          <Route exact path="/details">
            <h2>Detail</h2>
          </Route>
          <Route exact path="/addContact">
            <ContactAddPage />
          </Route>
          {/* <Route path="/editContact/:id">
            
            <ContactEditPage/>
          </Route> */}
          <Route path="/edit/:id" component={ContactEditPage} />
          </contactListContext.Provider>
        </Switch>
        <Link to="/addContact">
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "green",
              height: "40px",
              width: "40px",
              color: "white",
              textAlign: "center",
              fontSize: "20px",
              position:'fixed',
              bottom:'40px',
              right:'50px'
            }}
          >
            +
          </div>
        </Link>
      </Router>
    );
  }
}

export default App;
