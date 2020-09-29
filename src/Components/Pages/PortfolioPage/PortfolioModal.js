import React from "react"

import {
  Paper,
  Modal,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Box,
  Container,
  Button,
  makeStyles
} from "@material-ui/core"

import {
  FlaskStackButton,
  PythonStackButton,
  JSStackButton,
  MUIStackButton,
  HTMLStackButton,
  ReactStackButton,
  ReduxStackButton
} from "../../ReusableComponents/StackButtons"

import Image from "material-ui-image"

const convertTextToStackButton = (item, index) => {
  switch(item){
    case "flask":
      return <FlaskStackButton key={index} />
    case "python":
      return <PythonStackButton key={index} />
    case "javascript":
      return <JSStackButton key={index} />
    case "mui":
      return <MUIStackButton key={index} />
    case "react":
      return <ReactStackButton key={index} />
    case "html":
      return <HTMLStackButton key={index} />
    case "redux":
      return <ReduxStackButton key={index} />
    default:
      return <div />
  }
}

const convertTextToDemoButton = (item, index) => {
  var button
  switch(item){
    case "live":
      button = <Button fullWidth>Live Site</Button>
      break
    case "github":
      button = <Button fullWidth>GitHub</Button>
      break
    default:
      button = <div />
  }
  return <Grid item key={index}>{button}</Grid>
}

const useStyles = makeStyles({
  root: {
    flexWrap: 'nowrap',
  },
  paragraph: {
    marginBottom: "20px"
  },
  modal: {
    margin: "5vh 5vw",
  },
  paper: {
    overflow: "auto",
    paddingBottom:"1px" // to fit the scrollbar
  },
  content: {
    maxHeight: "82vh",
    overflow: "auto"
  }
})

const PortfolioModal = (props) => {
  const classes = useStyles()
  const {title, description, stack, stackDescription, images, buttons} = props.info
  console.log(images)
  return (
    <Modal className={classes.modal} open={props.modalOpen} onClose={props.onClose}>
      <Paper className={classes.paper}>
      <Box p={2} className={classes.content}>
        <Typography variant="h3">{title}</Typography>
        <Typography className={classes.paragraph}>
          {description}
        </Typography>
        <Typography variant="h4">Stack</Typography>
        <Grid container justify="center">
          {stack.map((item, index)=>convertTextToStackButton(item, index))}
        </Grid>
        <Typography className={classes.paragraph}>{stackDescription}</Typography>
        {images.length > 0 ? (
          <>
          <Typography variant="h4">Additional Images</Typography>
          <Box mb={3} />
          <GridList className={classes.root}>
            {images.map((item, index)=>(
              <GridListTile className={classes.tile} key={index}>
                <img src={item} />
              </GridListTile>
            ))}
          </GridList>
          </>
        ) : null}
        <Box mb={3} />
        </Box>
        <Grid container justify="space-evenly">
            {Object.keys(buttons).map((key, index)=>{
              console.log(key)
              return (<Button fullWidth key={index} href={buttons[key]}>{key}</Button>)
            })}
        </Grid>
      </Paper>
    </Modal>

  )
}

export default PortfolioModal
