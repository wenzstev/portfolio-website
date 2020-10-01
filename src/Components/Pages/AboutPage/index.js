import React from "react"

import InfoPage from "../../ReusableComponents/InfoPage"

import {
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core"

import {Link} from "react-router-dom"
import Image from "material-ui-image"

import {
  PythonStackButton,
  FlaskStackButton,
  HTMLStackButton,
  ReactStackButton,
  ReduxStackButton,
  JSStackButton
} from "../../ReusableComponents/StackButtons"

import {useSelector} from "react-redux"

import devPic from "../../../Assets/cropped_picture.jpg"

const useStyles = makeStyles({
  root: {
    margin: "20px 0px"
  },
  body: {
    transition: "all 1s",
    margin: "10px 0px"
  },

})

const StyledDivider = () =>{
  const classes = useStyles()
  return <Divider className={classes.root} />
}

const AboutPage = (props) => {
  const classes = useStyles()
  const bodyStyle = useSelector(store=>store.body)
  return (
    <InfoPage title="About">
      <Grid container justify="center">
        <Image src={devPic} style={{height: 300, width:300, padding:0, backgroundColor:"inherit", textAlign:"center"}} imageStyle={{borderRadius: "100%", width:"auto", position:"inherit"}}/>
      </Grid>
      <Typography className={classes.body} style={bodyStyle}>
        Hi, I'm Steve! I'm a Full Stack Developer living in Brooklyn.
        I graduated in 2017 from Washington University in St. Louis with a minor
        in Computer Science, and I've been coding seriously since September 2019.
        These days I primarily code in Python and JavaScript. I started a <a href="https://wenzstev.github.io">blog</a> back in January, where
        I've been writing about my development journey and the challenges I've faced in
        making my various projects.
      </Typography>
      <Typography className={classes.body} style={bodyStyle}>
        In my free time, I've been trying to make the best of COVID with an assortment of
        hobbies, including cooking and baking, development, and writing. My favorite kind of
        project is one where I can involve my other hobbies; both SousChef and Easy Draft
        stemmed from a desire to do something with cooking and writing, respectively.
      </Typography>
      <Typography className={classes.body} style={bodyStyle}>
        If you want to get in contact with me, leave a note through
        the <Link to="/contact">contact page</Link> and I'll get back to you as soon as possible. Otherwise, feel free to browse my projects on
        my <Link to="/portfolio">portfolio page</Link> or check out my <a href="https://github.com/wenzstev">GitHub</a>.
        Thanks for stopping by!
      </Typography>
      <Grid container justify="space-evenly">
        <StyledDivider />
        <PythonStackButton />
        <FlaskStackButton />
        <JSStackButton />
        <ReactStackButton />
        <HTMLStackButton />
        <ReduxStackButton />
      </Grid>
    </InfoPage>
  )
}

export default AboutPage
