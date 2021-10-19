import React,{useState} from 'react';
 const useComp=()=>{
     const[status,setStatus]=useState(null);
    
     return status;
     

 }

 const Comp =()=>{
     const isStatus=useComp();
     if(isStatus== null)
     {
        return 'Please wait! Loading........';

     }
     
     return (
     <div className="col-lg-12 text-center text-success m-5 mt-5">
     isStatus? 'online':'Offline';
     </div>
     );
    

 }

export default Comp;