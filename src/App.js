import React,{useState} from 'react';
import img from './img1.jpg'
import './App.css';
import {Box,AppBar,Toolbar ,Typography, Button,IconButton,Card ,CardActions ,
  CardContent ,CardMedia,Grid,Rating } from '@mui/material';
  import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Badge, InputLabel,FormControl} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const styles = changeColor({
//   backgroundColor:{
//     backgroundColor:'blue'
//   },
//   color2:{
//     backgroundColor:'red'
//   }  
// });
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function App() {
  const [count,setCount]=useState(0);
  // const bcChange = styles();
  
  // const [buttonName,setButtonName]=useState('Add to cart');
  // const handleIncrement=()=>{
  //   setCount(count + 1);
  //   setButtonName('Remove from cart');
  // }
  // const handleDecrement=()=>{
  //   setCount(count - 1);
  //   setButtonName('Add to cart')
  // }
  const handleButton = (e) =>{
    
    if(e.target.textContent==='Add to cart'){
      setCount(count + 1);
      e.target.textContent='Remove from cart';
      e.currentTarget.style.backgroundColor='red';
      
    }
    else if(e.target.textContent==='Remove from cart')
    {
      setCount(count - 1);
      e.target.textContent='Add to cart';
      e.currentTarget.style.backgroundColor='blue';
    }
  }
  
  
  return (
    <div className="App">
      <div style={{ padding: '2px', width: '100%' }}>
<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ padding: '50px', minWidth: 100 }}>Start Bootstrap</Typography>
        <Typography sx={{ minWidth: 100 }}>Home</Typography>
        <Typography sx={{ minWidth: 100 }}>About</Typography>
        <MenuItem >
        <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-label">Shop</InputLabel>
        <Select label="Shop">
            <MenuItem>All Products</MenuItem>
            <MenuItem>Popular Items</MenuItem>
            <MenuItem>New Arrivals</MenuItem>
        </Select>
        </FormControl>
        </MenuItem>

        <MenuItem><button style={{ marginLeft: '600px', padding: '5px', width: '100px',alignContent:'center'}}><IconButton aria-label="cart">
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
        </button></MenuItem>
        <br />
      </Box>
      </div>


      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Shop in style
          </Typography>
                    
        </Toolbar>
      </AppBar>
    </Box>
    <br/>
<div style={{paddingTop:'50px', paddingLeft:"100px"}}>
    <Grid container spacing={2}>
        
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200 ,maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <br/>       
      <CardActions
       style={{justifyContent: 'center'}}> 
        <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
        <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton}>Add to cart</Button>
        
        </div>
        
      </CardActions>
    </Card>
        </Grid>
        
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200 ,maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Special Item
        </Typography>
        <Rating name="full-rating-read" defaultValue={5} precision={0.2} readOnly />
        <Typography variant="body2" color="text.secondary">
       <strike>$20.00</strike>  $18.00
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
        <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton}>Add to cart</Button>
        </div>
        
      </CardActions>
    </Card>

        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200,maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}
               
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sale Item
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <strike>$50.00</strike>  $25.00 
        </Typography>
      </CardContent><br/>
            <CardActions style={{justifyContent: 'center'}}>
      <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
        <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton} >Add to cart</Button>
        </div>
        
      </CardActions>
    </Card>

        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200, maxHeight:500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}       
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Popular Item
        </Typography>
        <Rating name="full-rating-read" defaultValue={5} precision={0.2} readOnly />
        <Typography variant="body2" color="text.secondary">
        $40.00
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
      <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
        <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton}>Add to cart</Button>
        </div>
        
      </CardActions>
    </Card>

        </Grid>
      </Grid>
<br/>
<Grid container spacing={2}>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200, maxHeight:500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}
              />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sale Item
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <strike>$50.00</strike> $25.00 
        </Typography><br/>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
      <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
      <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton}>Add to cart</Button>
        </div>
        
      </CardActions>
    </Card>

        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200, maxHeight:500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $120.00 - $280.00 
        </Typography>
      </CardContent><br/>
      <CardActions style={{justifyContent:'center'}}>
      <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
      <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton}>Add to cart</Button>
        </div>
              </CardActions>
    </Card>

        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200 ,maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Special Item
        </Typography>
        <Rating name="full-rating-read" defaultValue={5} precision={0.2} readOnly />
        <Typography variant="body2" color="text.secondary">
       <strike>$20.00</strike>  $18.00
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
      <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton}>Add to cart</Button>
        </div>
        
      </CardActions>
    </Card>

        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200,maxHeight:500 }}>
      <CardMedia
        component="img"
        height="170"
        image={img}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Popular Item
        </Typography>
        <Rating name="full-rating-read" defaultValue={5} precision={0.2} readOnly />
        <Typography variant="body2" color="text.secondary">
        $40.00 
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <div style={{border: 'solid 1px black',borderRadius: '5px'}}>
      <Button style={{color:'white',backgroundColor:'blue'}} onClick={handleButton}>Add to cart</Button>
        </div>
        
      </CardActions>
    </Card>

        </Grid>
      </Grid>
      </div>

<br/>

    
    
    </div>



  );
}

export default App;
