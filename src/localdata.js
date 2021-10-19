import React,{useState} from 'react';
import useLocalStorage from './useLocalStorage';

const LocalData=()=>{
    const[count,setCount]=useLocalStorage("appcount",5);
    return(
             <div className="col-md-12 text-center mt-5">
                 <h1 className="text-success">The  curent Value is :{count}</h1>
                <button className="btn btn-block btn-danger mt-5" onClick={()=>setCount(count+5)}>click</button>
            </div>
    );

}
export default LocalData;