import React from 'react';
import moment from 'moment';
import { Card , CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, updatePost } from '../../../actions/posts'
import useStyles from './styles';

const Post = ({ post , setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
   
    const deleteThePost = () => {
       dispatch(deletePost(post._id), [dispatch] );          
    }

    const likeThePost = () => {
        dispatch(updatePost(post._id, {...post, likeList: post.likeList.concat(user?.result?._id)}),[dispatch]);
    }
    const disableLike =() =>{
        if(user?.result?._id === post?.creator) {
        alert("Users can not like their own post ");
        } else{
            alert("You have liked it before");
        }
    }
    return (
        <Card className = {classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title = {post.title} />
            <div className={classes.overlay}>
                <Typography variant ="h6"> {post.name} </Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className ={classes.overlay2}>
                {user?.result._id === post?.creator ? (
                <Button style={{color:'white'}} size="small" onClick={() => setCurrentId(post._id)} >
                    <MoreHorizIcon fontSize="default" />
                </Button>) :null }
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>` #${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography> 
            <CardContent>  
                 <Typography gutterBottom>{post.message}</Typography> 
            </CardContent>
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
            </CardActions>
           </Card>
    );
}

export default Post;


