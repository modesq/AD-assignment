import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    // const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* {isAuthenticated && (
              <Route exact path="/profile" element={<Profile />}></Route>
            )} */}
          </Routes>
        </Router>

        <Footer />
      </>
    );
  }
}

export default App;
