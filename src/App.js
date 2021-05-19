import React from "react";
import TableTop from "./components/TableTop";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import axios from "axios";



const App = () => {

    return (
        <Wrapper>
        <Header />
        <SearchBar />
        <TableTop />
    </Wrapper>


    )


}

  


export default App;

