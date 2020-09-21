import React from "react"
import {
  ButtonBase,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    height: 100
  }
})

const BaseStackButton = (props) => {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.root}>
      {props.image}
    </ButtonBase>
  )
}
