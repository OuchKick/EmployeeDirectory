import React from "react";
import TableTop from "./components/TableTop";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import axios from "axios";




class App extends React.Component {
    constructor(){
        super();
        this.state = {
            employees: [],
            getEmployees: ""

        }
    }

    async componentDidMount() {
        const resp = await fetch('https://randomuser.me/api/?inc=name,email,dob,phone,picture&results=20')
        const employees = await resp.json()
        this.setState({employees})
    }
    render() {
        return (
            <Wrapper>
                <Header />
                <SearchBar placeholder="Search by Name" handleChange={(e) => console.log(e.target.value)} />
                <TableTop />
            </Wrapper>
        )
    }
}




export default App;

