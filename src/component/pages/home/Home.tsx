import * as React from 'react'
import {Grid, makeStyles} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";



export const useStylesHome = makeStyles((theme)=>({
  wrapper:{
    height:'100%'
  },

}))


export const Home = () => {

  const classes = useStylesHome()

  return(
      <div className={classes.wrapper}>
          <Grid container spacing={3} className={classes.wrapper}>
            <Grid item style={{backgroundColor:'red'}} xs={1}>
              <TwitterIcon color={'primary'}/>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Grid>
            <Grid item style={{backgroundColor:'green'}} xs={7}></Grid>
            <Grid item style={{backgroundColor:'blue'}} xs={4}></Grid>
          </Grid>
      </div>
  )
}