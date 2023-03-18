import React from 'react'
import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import { Grid } from '@mui/material';
import Post from "../../components/post/Post"


const Home = () => {
  return (
    <>Home

<Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Post/>
                </Grid>
            </Grid>
    </>
  )
}

export default Home