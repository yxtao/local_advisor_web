import React, {useState} from 'react';
import moment from 'moment';
import { Card , CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Box } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import * as api from '../../../api/'; 

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likeList);
    const [show, setShow] = useState(true);
   
    const handleLike = async ()=>{
        try {
            await api.updatePost(post._id, {...post, likeList: post.likeList.concat(user?.result?._id)});
            setLikes([...post.likeList, user?.result?._id]); 
        }catch(error) {
            console.log(error);
        }
    }

    const deleteThePost= async ()=>{
        try {
            await api.deletePost(post._id);
            setShow(false)
        }catch(error) {
            console.log(error);
        }
    }
   
   
    const openPost = (e) => {
        history.push(`/posts/${post._id}`)
    }

    if(!post) return null

    return ( !show ? null :    
        
        <Card className = {classes.card} >
            <ButtonBase>
               <Card className={classes.cardClick} onClick={openPost}>
                <CardMedia className={classes.media} image={post.selectedFile} title = {post.title} />
                <div className={classes.overlay}>
                    <Typography variant ="h6"> {post.name} </Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>` #${tag}`)}</Typography>
                </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography> 
                <CardContent>  
                    <Typography gutterBottom>{post.message}</Typography> 
                </CardContent>
                </Card>
            </ButtonBase>
            <CardActions className={classes.CardActions}>
                <Button disabled={user==null || (user?.result?._id === post?.creator || post.likeList.includes(user?.result?._id))} size="small" color="primary" onClick={handleLike}>
                    <ThumbUpAltIcon fontSize="small" />
                    { "\xa0 Like "}
                    {likes.length}
                </Button>
                { user?.result?._id === post?.creator? (
                <Button size="small" color="primary" onClick={deleteThePost}>
                    <DeleteIcon fontSize="small"  />
                    Delete
                </Button> ) : null }
                
                {user?.result._id === post?.creator ? (
                <Button  size="small" color= "primary" onClick={() => setCurrentId(post._id)} >
                    edit
                </Button>) :null }
                
            </CardActions>
           </Card>         
    );
}


export default Post;


