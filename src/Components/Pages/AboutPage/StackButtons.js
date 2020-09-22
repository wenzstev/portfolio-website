import React from "react"
import {
  ButtonBase,
  Grid,
  makeStyles
} from "@material-ui/core"
import Image from "material-ui-image"

import pyLogo from "../../../Assets/python-logo.png"
import flaskLogo from "../../../Assets/flask-logo.png"
import htmlLogo from "../../../Assets/html-logo.png"
import jsLogo from "../../../Assets/javascript-logo.png"
import muiLogo from "../../../Assets/materialui-logo.png"
import reactLogo from "../../../Assets/react-logo.png"

const useStyles = makeStyles({
  image: {
    height: 90,
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: "100%"
  }
})

const BaseStackButton = (props) => {
  const classes = useStyles()
  return (
    <Grid item>
    <ButtonBase className={classes.button}>
      <img className={classes.image} src={props.image} />
    </ButtonBase>
    </Grid>
  )
}

export const FlaskStackButton = () => <BaseStackButton image={flaskLogo} />
export const PythonStackButton = () => <BaseStackButton image={pyLogo} />
export const JSStackButton = () => <BaseStackButton image={jsLogo} />
export const HTMLStackButton = () => <BaseStackButton image={htmlLogo} />
export const MUIStackButton = () => <BaseStackButton image={muiLogo} />
export const ReactStackButton = () => <BaseStackButton image={reactLogo} />
