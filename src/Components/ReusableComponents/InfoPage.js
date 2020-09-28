import React from "react"

import {
  Container,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core"

import {useSelector} from "react-redux"

import BackgroundBar from "./BackgroundBar"

const useStyles = makeStyles({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0
  }
})

const InfoPage = (props) => {
  const classes = useStyles()
  const background = useSelector(store=>store.background)
  const headerClass = useSelector(store=>store.header)
  const bodyClass = useSelector(store=>store.body)

  return (
    <Box className={classes.root} style={{backgroundImage:`url(${background})`}}>
      <Container>
        <BackgroundBar />
        <Box>
          <Typography variant="h2" align="center" style={headerClass}>
            {props.title}
          </Typography>
        </Box>
        <Box>
          {props.children}
        </Box>
      </Container>
    </Box>
  )
}

export default InfoPage
