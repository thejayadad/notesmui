import React from 'react'
import { styled, Box, Typography } from '@mui/material';



const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/2882507/pexels-photo-2882507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
  return (
    <Image>
    <Heading>BLOG</Heading>
    <SubHeading>Code for Interview</SubHeading>
</Image>
  )
}

export default Banner