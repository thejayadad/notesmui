import React from 'react'
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import bg from "../../images/bg.png"

const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}



const Create = () => {
  return (
    <Container>
        <Image src={bg} alt="post"/>
        <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                />
                <InputTextField name='title' placeholder="Title" />
                <Button  sx={{
                    background: " #4f240f",
                    color: " #fafafa"
                }}>Publish</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
            />
    </Container>
  )
}

export default Create