import React,{useState}  from 'react';
import { useEffect } from 'react';

 const useTitle=(title)=>{

     useEffect(() => { document.title=title; }, [title])
 }

const Process=()=>{
    const[value,setValue]=useState(0);

    const increment=()=>setValue(value+1);
    const title =`Chats(${value})  `;
    useTitle(title);
    return(<div className="col-md-12 text-center mt-5">
        <h1 className="text-primary text-center">The Current value is {value}</h1>
        <button className="btn btn-success" onClick={increment}>Increment By 1</button>
    </div>
    );

}
export default Process;












// const useTitle=()=>{
//     const[val,setVal]=useState(0);
//     return [val,setVal];

   
// }

// const Process=()=>{
//    const[value,setValue]=useTitle();

//    const increment=()=>setValue(value+1);
//    // const title ="You clicked {$value} times .";
  
//    return(<div className="col-md-12 text-center">
//        <h1 className="text-primary text-center">The Current value is {value}</h1>
//        <button className="btn btn-success" onClick={increment}>Increment By 1</button>
//    </div>
//    );

// }