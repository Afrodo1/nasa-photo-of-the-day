import React, {useState, useEffect} from 'react';
import APODbox from './APODbox';
import axios from 'axios';


function APOD () {
    const[pod,setPod] = useState([]);

    useEffect(()=>{
        axios.get('http://api.nasa.gov/planetary/apod?api_key=3N8AbUSY3gYwrPxuCIeYjt31L0fBobr4H467hcfH')
        .then(response=>{
            console.log(response.data);
            setPod(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    return(
        <div className='container'>
            <APODbox title = {pod.title} url = {pod.url} date = {pod.date} explanation = {pod.explanation}/>
        </div>
    )


}

export default APOD;