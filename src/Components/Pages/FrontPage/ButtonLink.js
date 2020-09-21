import React from "react"
import {
  ButtonBase,
  Box,
  Typography,
  makeStyles
} from "@material-ui/core"
import {
  Link as RouterLink
} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: props=>props.backgroundColor,
    height: props=>props.height,
    color: "white",
    transition: "opacity .2s",
    "&:hover":{
      opacity: ".9",
      "& .frameBox":{
        outline: "5px solid white",
      }
    }
  },

})

const ButtonLink = (props) => {
  const classes = useStyles(props)
  return (
    <Box m={1}>
      <ButtonBase
        focusRipple
        className={classes.root}
        component={RouterLink}
        to={props.to}>
        <Box p={4}>
          <Box px={2} className="frameBox">
            <Typography variant="h5">{props.text}</Typography>
          </Box>
        </Box>
      </ButtonBase>
    </Box>
  )
}

export default ButtonLink
