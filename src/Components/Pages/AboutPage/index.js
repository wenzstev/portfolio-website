import React from "react"

import InfoPage from "../../ReusableComponents/InfoPage"

import {
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core"

import {
  PythonStackButton,
  FlaskStackButton,
  HTMLStackButton,
  ReactStackButton,
  MUIStackButton,
  JSStackButton
} from "../../ReusableComponents/StackButtons"

import {useSelector} from "react-redux"

const useStyles = makeStyles({
  root: {
    margin: "20px 0px"
  }
})

const StyledDivider = () =>{
  const classes = useStyles()
  return <Divider className={classes.root} />
}

const AboutPage = (props) => {
  return (
    <InfoPage title="About">
      <Typography style={props.bodyClass}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Typography>
      <Grid container justify="space-evenly">
        <StyledDivider />
        <PythonStackButton />
        <FlaskStackButton />
        <JSStackButton />
        <ReactStackButton />
        <HTMLStackButton />
        <MUIStackButton />
      </Grid>
    </InfoPage>
  )
}

export default AboutPage
