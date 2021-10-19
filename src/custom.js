import React,{useState,useEffect}  from 'react';
const useCustom=(url,ivalue)=>{
    const [res,setRes]=useState(ivalue);

    useEffect(()=>{
    fetch(url).then(response => response.json()).then(json => setRes(json));
    },[]);
  
    return res;

}
const Custom=()=>{
    const name = useCustom(' https://jsonplaceholder.typicode.com/photos',[]);
    return(
        <div className="col-md-12 text-center mt-5">
            <h1 className="text-success">Title</h1>
            {
                name.map(nam=>{
                    const{ id , title , url } = nam;
    
                    return(
                         <div key={ id }>
                             <label>{ id } 
                             <h1><a  className=" btn btn-block btn-info text-danger"  href={url}>{title}</a></h1></label>
                            
                            </div>
                    );
                })
                }
             
             </div>
    
        );
    
    }
export default Custom; 