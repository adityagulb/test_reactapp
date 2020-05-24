import React from "react";
import Axios from "axios";
import "./App.css";

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
        
       
    //     //const countries = Object.keys(resCountries.data.countries);
    //     this.setState({
    //         confirmed:resApi.data.confirmed.value,
    //         recovered:resApi.data.recovered.value,
    //         deaths:resApi.data.deaths.value,
    //         countries
    //     }
    // }

    // async getCountryData(e){
    //     if(e.target.value === "Worldwide") {
    //         return this.getData();     
    //     }
        
    //     try{
    //     const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
    //     this.setState({
    //         confirmed:res.data.confirmed.value,
    //         recovered:res.data.recovered.value,
    //         deaths:res.data.deaths.value
    //     });
    // }
    // catch(err){
    //     if(err.response.status===404)
    //     this.setState({
    //         confirmed:"No data available..",
    //         recovered:"No data available..",
    //         deaths:"No data available.."
    //     });
    // }
    }

   

    // renderCountryOptions(){
    //     return this.state.countries.map(( country, j) =>{
    //     return <option key={j}>{ country }</option>
    //     });

    // }

    render(){
      console.log("helloooooooooooooo");
        return (
        <div className="container">
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