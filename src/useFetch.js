import React,{useState,useEffect} from "react";


const useFetch = (url,iValue) => {
    const[result,setResult]=useState(iValue);

    useEffect(() => {
       fetch(url).then(response=>response.json())
            .then(json=> setResult(json));
        }, []);
        
        return result;

}
export default useFetch;
