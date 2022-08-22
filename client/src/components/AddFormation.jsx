import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {addFormation} from '../redux/FormationAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddFormation = () => {
    
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [institut, setInstitut] = useState('');
    const [location, setLocation] = useState('');
    
    const dispatch = useDispatch();
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handelSubmit = (e) => {
      e.preventDefault();
      const newFormation = {
        title,
        date,
        institut,
        location,
        
      };
      dispatch(addFormation(newFormation));
      setTitle('');
      setDate('');
      setInstitut('');
      setLocation('');
    };

  const theme = createTheme();

  return (
    <div>
      

      <Button onClick={handleOpen}><AddCircleIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ThemeProvider theme={theme} >
            <Grid container component="main" sx={{ flexGrow: 1 }} >
            <CssBaseline />
              <Grid item xs={12}
                sm={2}
                md={16}
                component={Paper}
                elevation={0}
                square
              >
                <Box
                  sx={{
                    my: 4,
                    mx: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  
                  <Typography component="h1" variant="h5">
                    Ajouter une formation
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handelSubmit}
                    sx={{mt: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexWrap: "wrap",
                    }}
                  >
                    <TextField
                      margin="normal"
                      required
                      label="Titre de la formation"
                      name="Titre"
                      autoFocus
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="Date"
                      label="Date de la formation"
                      type="text"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="Institut"
                      label="Institut"
                      type="Institut"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={institut}
                      onChange={(e) => setInstitut(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="location"
                      label="lieu de la formation"
                      type="location"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    
                    
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{mt: 3, mb: 2}}
                    >ADD
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </Modal>
        
         
        
    </div>
  )
}

export default AddFormation
