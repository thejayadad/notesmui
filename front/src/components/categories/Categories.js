import React from 'react'
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';


const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #646464;
    color: #4f240f;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;



const Categories = () => {
  return (
    <>
    <StyledButton >Create Blog</StyledButton>
    <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                            <TableRow >
                                <TableCell>
                                    <StyledLink to="/">
                                        category Type
                                    </StyledLink>
                                </TableCell>
                            </TableRow>

                </TableBody>
            </StyledTable>
    </>
  )
}

export default Categories