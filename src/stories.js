import React,{useState} from "react";
import useFetch1 from "./useFetch1";

const Stories=()=>{
    const stories=useFetch1('https://news-proxy-server.appspot.com/topstories',[]);
    
    return(
    <div className="col-md-12 text-center mt-5">
        <h1 className="text-success">Stories</h1>
        {
            stories.map(story=>{
                const{ id , time , by , title , url , descendants} = story;

                return(
                    
                    <div key={id}>
                        <h2><a  className="text-danger" href={url}>{title}</a></h2>
                         <div className="text-primary"> {by}<br/>{descendants}<br/>{new Date(time).toLocaleString()}</div> 
                        </div>
                );
            })
        }

    </div>

    );

}
export default Stories; 