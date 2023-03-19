import React from 'react'
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import Post from '../post/Post';

const PostFeed = () => {
  return (
    <Grid item lg={6} sm={12} xs={12}>
        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/">
        <Post />
        <Post />
        <Post />


{/* <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                No data is available for selected category
            </Box> */}
    </Link>
    </Grid>
  )
}

export default PostFeed