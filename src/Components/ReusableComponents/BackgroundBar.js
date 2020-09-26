import React from "react"

import {
  ButtonBase,
  makeStyles,
  Grid,
  Box
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    borderRadius: 5
  },
  box: {
    backgroundColor: props => props.color,
    borderRadius: 5,
    height: 30,
    width: 30,
  }
})

const BackgroundButton = (props) => {
  const classes = useStyles(props)
  return (
    <Grid item>
    <ButtonBase className={classes.root}>
      <Box className={classes.box}/>
    </ButtonBase>
    </Grid>
  )
}

const BackgroundBar = () => {
  return (
    <Box my={2}>
    <Grid container spacing={2} justify="center">
      <BackgroundButton color="cornsilk" />
      <BackgroundButton color="navy" />
      <BackgroundButton color="teal" />
    </Grid>
    </Box>
  )
}

export default BackgroundBar
