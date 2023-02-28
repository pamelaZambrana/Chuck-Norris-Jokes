import React, {useState, useEffect} from 'react';
import { getJokes } from '../service/service';
import LikeDislike from './likeDislike';


const RandomJokes = () => {
    const [jokes, setJokes] = useState([]);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        obtainAllJokes();
    }, []);
    const obtainAllJokes=()=>{
        
        getJokes()
            .then((response)=>{
                if(response.data){
                    setJokes(response.data.value);
                    
                } else{
                    throw new Error("Users not found")
                };
            })
            .catch((error)=>alert(`Something went wrong: ${error}`))
            .finally(()=>{
                console.log("jokes", jokes);
            })
    };

    return (
        <div className='container h-auto p-3 align-self-center'>
            <h1>Chuck Norris Jokes</h1>
            <div className='card m-3'>
                <p className='m-2'>{
                    jokes
                }</p>
            </div>
            <LikeDislike 
                likes={likes}
                setLikes={setLikes}
                dislikes={dislikes}
                setDislikes={setDislikes}
            ></LikeDislike>
            <button onClick={()=>obtainAllJokes()}>New Joke</button>
            
        </div>
    );
}

export default RandomJokes;
