import React from 'react'
import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import { Grid } from '@mui/material';
import PostFeed from '../../components/postFeed/PostFeed';

const Home = () => {
  return (
    <>Home

<Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <PostFeed />
                </Grid>
            </Grid>
    </>
  )
}

export default Home