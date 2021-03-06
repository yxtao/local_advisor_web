import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsByPage } from '../../actions/posts';

const Paginate = ({ page }) =>{
    const { numberOfPages , render } = useSelector((state)=> state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
          dispatch(getPostsByPage(page));      
    }, [ page , render]);

    return(
        <Pagination
            count = { numberOfPages }
            page = { Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={ (item) => (
                <PaginationItem {...item} component={Link} to={`/posts/?page=${item.page}`} />
            ) }
        />
    );
}

export default Paginate;