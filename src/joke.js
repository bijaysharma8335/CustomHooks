import React from "react";
import useFetch from "./useFetch";


const Joke=()=>{

    const {id,type,setup,punchline}=useFetch('https://official-joke-api.appspot.com/jokes/random' , {});
   
 return(
        <div className="col-md-12 text-center mt-5">
            <h1 className="text-success">Joke is :</h1>
            <br/>
            <h2 className="text-danger">{id}</h2>
            <h3 className="text-info">{type}</h3>
            <h4 className="text-primary">{setup}</h4>
            <h5 className="text-secondary">{punchline}</h5>
        </div>
    );

}
export default Joke;