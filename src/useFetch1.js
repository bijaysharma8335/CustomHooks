import React,{useEffect,useState} from 'react';

const useFetch1=(url,initialState)=>{
    const[res,setRes]=useState(initialState);

    useEffect(() => {
        fetch(url).then(response=>response.json()).then(json=>setRes(json));
    }, []);


    return res;
}
export default useFetch1;