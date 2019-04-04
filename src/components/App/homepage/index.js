// import React from "react";
<<<<<<< HEAD

// import 'bootstrap/dist/css/bootstrap.min.css';

// import Example from "./example/index";
// import Searchbar from "./searchbar/index";
// import NavBar from './navbar/index';
// //import Carousal from './Carousal'
// import axios from "axios";
// import "./Book.css"
=======

// import 'bootstrap/dist/css/bootstrap.min.css';

// import Example from "./example/index";
// import Searchbar from "./searchbar/index";
// import NavBar from './navbar/index';
// import axios from "axios";
// import "./Book.css"


// class Homepage extends React.Component{
//     state = {
//         books: []
//       };
    
//     componentDidMount() {
//         axios
//           .get("http://localhost:9000/books")
//           .then(response => {
//             console.log(response)
//             // create an array of contacts only with relevant data
      
//             this.setState({books: response.data});
    
//             // store the new state object in the component's state
            
//           })
//           .catch(error => console.log(error));
//      }
    


//     render(){
//       console.log(this.state.books)
        
//        return(
      
//                 <div>
//                     <NavBar /><br/>
//                     <Searchbar/><br/>                                
//                     <Example books={this.state.books} />
//                     </div>
 
//        );
//     }
// }

// export default Homepage; 

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import Example from "./example/index";
import Searchbar from "./searchbar/index";
import NavBar from './navbar/index';
import axios from "axios";
import "./Book.css"
>>>>>>> 38faf5af1ff0808a2454116927b84fef10fffd69


// class Homepage extends React.Component{
//     state = {
//         books: []
//       };
    
//     componentDidMount() {
//         axios
//           .get("http://localhost:9000/books")
//           .then(response => {
//             console.log(response)
//             // create an array of contacts only with relevant data
      
//             this.setState({books: response.data});
    
//             // store the new state object in the component's state
            
//           })
//           .catch(error => console.log(error));
//      }
    


//     render(){
//       console.log(this.state.books)
        
//        return(
      
<<<<<<< HEAD
//                 <div>
//                     <NavBar /><br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <Searchbar/><br/>                                
//                     <Example books={this.state.books} />
//                     </div>
=======
                <div>
                    <NavBar /><br/><br/><br/>                      
                    <div class="container">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="5">
          <form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="h4 text-center mb-4">Search Your Book</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Book Title
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Author
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Address
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
          
            <div className="text-center mt-4">
              <MDBBtn color="success"  type="submit">
                Search
                
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>                         
   <Example books={this.state.books} />
   </div>
>>>>>>> 38faf5af1ff0808a2454116927b84fef10fffd69
 
//        );
//     }
// }

// export default Homepage; 


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../LayoutBody';
import Button from '../Button';
import Typography from '../Typography';
import NavBar from './navbar/index';
import { IoIosSearch } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { IoMdLocate } from "react-icons/io";
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 14,
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing.unit * 8,
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <div>
      <div><NavBar/></div>          
                       <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Steps to get going!
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                {/* <img
                  src=""
                  alt="suitcase"
                  className={classes.image}
                /> */}
                <div style={{color: 'black'}}>
                <IoIosSearch size={54}/>
                </div>
                <Typography variant="h5" align="center">
                  Search for a book of your choice.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                {/* <img
                  src="/static/themes/onepirate/productHowItWorks2.svg"
                  alt="graph"
                  className={classes.image}
                /> */}
                <div style={{color: 'black'}}>
                <IoIosListBox size={54}/>
                </div>
                
                <Typography variant="h5" align="center">
                  Register or Login as a user to mark your book as a favourite.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                {/* <img
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  className={classes.image}
                /> */}
                <div style={{color: 'black'}}>
                <IoMdLocate size={54}/>
                </div>
                <Typography variant="h5" align="center">
                  {'Locate the book on the map to find your nearest seller.'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/premium-themes/onepirate/sign-up" variant="button" />
          )}
        >
          Get started
        </Button> */}
      </LayoutBody>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  );
}

<<<<<<< HEAD
ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
=======
export default Homepage; 

>>>>>>> 38faf5af1ff0808a2454116927b84fef10fffd69
