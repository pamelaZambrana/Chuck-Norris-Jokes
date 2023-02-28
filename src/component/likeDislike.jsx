import React from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Button from '@mui/material/Button';
const LikeDislike = ({likes, setLikes, dislikes, setDislikes}) => {
    
    function getLike(){
        likes=likes+1;
        setLikes(likes);
    }
    function getDislike(){
        dislikes=dislikes+1;
        setDislikes(dislikes);
    }
    return (
        <div className="m-3 d-flex justify-content-center gap-3">
            <div>
                <Button 
                    variant="text"
                    onClick={()=>getLike()}
                >
                    <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                </Button>
                <p>{likes}</p>
            </div>
            <div>
                <Button 
                variant="text"
                onClick={()=>getDislike()}
                >
                    <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                </Button>
                <p>{dislikes}</p>
            </div>
            
            
        </div>
    );
}

export default LikeDislike;
