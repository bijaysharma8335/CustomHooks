import React,{useState} from 'react';
import { useEffect } from 'react';

const useLocalStorage=(key,dvalue)=>{
    const[state,setState]=useState(()=>{
        let value;
        try{
            value=JSON.parse(window.localStorage.getItem(key) ||String(dvalue));
            
        }
        catch(e){
            value=dvalue;
        }
        return value;
    })

    useEffect(() => {window.localStorage.setItem(key,state); }, [state]);

    return[state,setState];
}
export default useLocalStorage;