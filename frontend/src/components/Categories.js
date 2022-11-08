import React from 'react';
import {Box, Button} from "@mui/material";


function Categories(){
    return (
        <Box sx={{ flexGrow: 1 }} >
            <center>
                <Button variant="text" color="inherit" sx={{margin:1}}>Women</Button>
                <Button variant="text" color="inherit" sx={{margin:1}}>Men</Button>
                <Button variant="text" color="inherit" sx={{margin:1}}>Kids</Button>
                <Button variant="text" color="inherit" sx={{margin:1}}>HOME & LIFESTYLE</Button>
                <Button variant="text" color="inherit" sx={{margin:1}}>Beauty & Health</Button>
                <Button variant="text" color="inherit" sx={{margin:1}}>Books & Stationery</Button>
                <Button variant="text" color="inherit" sx={{margin:1}}>Gifts</Button>
            </center>
        </Box>
    );
}

export default Categories;