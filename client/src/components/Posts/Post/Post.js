import React from 'react';
import moment from 'moment';
import { Card , CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Box } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deletePost, updatePost } from '../../../actions/posts'
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const Post = ({ post , setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));
   
    const deleteThePost = () => {
       dispatch(deletePost(post._id), [dispatch] ); 
       history.push(`/`)  ;      
    }

    const likeThePost = () => {
        dispatch(updatePost(post._id, {...post, likeList: post.likeList.concat(user?.result?._id)}),[dispatch]);
    }

    const disableLike =() =>{
        if(user?.result?._id === post?.creator) {
        alert("Users can not like their own post");
        } else{
            alert("You have liked it already");
        }
    }

    const openPost = (e) => {
        history.push(`/posts/${post._id}`)
    }

    if(!post) return null

    return (   
        
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
                <Button size="small" color="primary" onClick={(user?.result?._id === post?.creator || post.likeList.includes(user?.result?._id))? disableLike :likeThePost}>
                    <ThumbUpAltIcon fontSize="small" />
                    { "\xa0 Like "}
                    {post.likeList.length}
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


