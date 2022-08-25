import React, {useState} from 'react';
import { useDispatch} from "react-redux";
import { getCurrenciesNames,getSearchedCurrencies} from '../actions';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import LinearProgress from '@mui/material/LinearProgress';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchBar (){

    const dispatch = useDispatch() 
    const [open, setOpen] =useState(false);

      const handleInputChange=(e)=>{
        e.preventDefault()
        dispatch(getCurrenciesNames(e.target.value))
        dispatch(getSearchedCurrencies(true))
        setOpen(true);
      }

      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div>           
            <Box sx={{ flexGrow: 1}}>
              <AppBar id="appbar" position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                  </Typography>
                  <Search>
                    <IconButton aria-label="delete">
                        <SearchIcon/>
                    </IconButton>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      onChange = {(e) => handleInputChange(e)}
                    />
                  </Search>
                </Toolbar>
              </AppBar>
            </Box> 
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={{ width: '100%' }}>
                  <LinearProgress color='success' />
                </Box>
              </Modal>
            </div>                   
        </div>
    )

}



