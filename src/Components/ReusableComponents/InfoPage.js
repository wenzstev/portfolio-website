import React from "react"

import {
  Container,
  Typography,
  Box,
  Paper,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core"

import {useSelector} from "react-redux"

import BackgroundBar from "./BackgroundBar"

const useStyles = makeStyles({
  root: {
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "100vh",
    height: "auto",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0
  },
  backgroundPanel: {
    backgroundColor: "rgba(0,0,0,.4)",
    borderRadius: 10,
    padding: 10,
    position: "relative",
    top: "1vh"
  },
  topSpacer: {
    height: "10vh"
  },
  bottomSpacer: {
    height: "5vh"
  },
  textTransition: {
    transition: "color 1s ease"
  }
})

const InfoPage = (props) => {
  const classes = useStyles()
  const background = useSelector(store=>store.background)
  const headerClass = useSelector(store=>store.header)
  const bodyClass = useSelector(store=>store.body)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))


  return (
    <Box className={classes.root} style={{backgroundImage:`url(${background})`}}>
      {matches ? <Box className={classes.topSpacer} /> : null}
      <Container>
          <Paper className={classes.backgroundPanel}>
          <BackgroundBar />
          <Box>
            <Typography className={classes.textTransition} variant="h2" align="center" style={headerClass}>
              {props.title}
            </Typography>
          </Box>
          <Box>
            {props.children}
          </Box>
          </Paper>
      </Container>
      <Box className={classes.bottomSpacer} />
    </Box>
  )
}

export default InfoPage
