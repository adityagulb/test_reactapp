import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Form,FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component{
    constructor(props){
        super(props);

       // this.getCountryData = this.getCountryData.bind(this);
        this.state = {
          confirmed :0,
          recovered :0,
          deaths :0,
          countries: [],
          dailydata: []
      };
    }

    


    componentDidMount() {
      this.getData();

    }

    getData(){
      const api = "https://api.covid19india.org/data.json";
      fetch(api)
        .then((response) => {
                    if(!response.ok) throw new Error(response.status);
                     else return response.json();
        })
        .then((data) => {
   // document.writeln(data.cases_time_series[data.cases_time_series.length - 1].totalconfirmed);
    this.setState( { 
      dailydata: data.cases_time_series[data.cases_time_series.length - 1 ]
    });
    
  })
  .catch((error) => {
    document.write('error: ' + error);
    
  });
}    
       
    
    render(){
      console.log("helloooooooooooooo");
        return (

        
        <div className="container">
          <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
            <h1>Covid-19 Update</h1>
            <h2>[INDIA]</h2>

            {/* <select className="dropdown" onChange={this.getCountryData}>
                {this.renderCountryOptions()}
            </select> */}




            <div className="flex">

            <div className="box confirmed">
                <h3 >Confirmed Cases</h3>
                <h4>{this.state.dailydata.totalconfirmed}</h4>
            </div>
            <div className="box recovered">
                <h3>Recovered Cases</h3>
                <h4>{this.state.dailydata.totalrecovered} </h4>
            </div>
            <div className="box deaths">
                <h3>Deaths</h3>
                <h4>{this.state.dailydata.totaldeceased}</h4>
            </div>
            </div>
            
        </div>);
    }
}