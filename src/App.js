import React from "react";
import TableTop from "./components/TableTop";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Select from "react-select";
import employees from "./employees.json"
import EmployeeCard from "./components/EmployeeCard"


const employeeList = employees;

const Divisions = [
    { label: "Human Resource", value: "Human Resource" },
    { label: "Accounting", value: "Accounting" },
    { label: "Software Development", value: "Software Development" },
    { label: "Marketing", value: "Marketing" },
    { label: "Show All", value: "Show All" },
  ];
class App extends React.Component {

    state = {
        employees
      };
    
      componentDidMount() {
        this.setState({employess: employeeList});
      }
    
      handleChange = event => {
        console.log(event);
        console.log(event.value);
        const department = event.value;
        let employees = employeeList;
        if (department !== "Show All") {
          employees = employeeList.filter(employee => employee.department === department);
        }
        this.setState({employees});
      };
    
    

    render() {
        return (
            <Wrapper>
                <Header />
                <Select 
                options={Divisions} 
                placeholder="Select Department"
                onChange={this.handleChange}
                className="mt-1"
              />
                <TableTop />
                {this.state.employees.map(employee => ( 
                <EmployeeCard 
                id={employee.id}
                key={employee.id}
                name={employee.name}
                image={employee.image}
                department={employee.department}
                title={employee.title}
                />
                ))}
            </Wrapper>
        )
    }
}




export default App;

