import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../actions/posts';


const DetailPage = () => {
    const { post } = useSelector ((state)=> state.posts);
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPostById(id));
    }, [id]);

    return(
        <p>this is detail page for {JSON.stringify(post)}   </p>
    );
}

export default DetailPage