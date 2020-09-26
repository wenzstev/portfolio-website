import React from "react"

import {
  Container,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core"

import BackgroundBar from "./BackgroundBar"

const useStyles = makeStyles({

})

const InfoPage = (props) => {
  const classes = useStyles()
  return (
    <Container>
      <BackgroundBar />
      <Box>
        <Typography variant="h2" align="center">
          {props.title}
        </Typography>
      </Box>
      <Box>
        {props.children}
      </Box>
    </Container>
  )
}

export default InfoPage
