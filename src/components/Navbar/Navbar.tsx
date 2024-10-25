import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 , mb: 4}}>
                <AppBar position="static" sx={{background: "red"}}>
                    <Toolbar sx={{ background: 'red', width: 1200, mx: 'auto' }}>
                        <Typography variant="h6" component={NavLink} to='/' sx={{flexGrow: 1, textDecoration: 'none'}}>
                            <h3>Daily Bugle</h3>
                        </Typography>
                        <Button color="inherit" component={NavLink} to='/'>Home</Button>
                        <Button color="inherit" component={NavLink} to='/add/new-post'>Add</Button>
                        <Button color="inherit" component={NavLink} to='/about'>About</Button>
                        <Button color="inherit" component={NavLink} to='/contacts'>Contacts</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;