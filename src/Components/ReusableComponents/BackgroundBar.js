import React from "react"
import clsx from "clsx"

import {
  ButtonBase,
  makeStyles,
  Grid,
  Box,
  Radio,
  RadioGroup
} from "@material-ui/core"

import {useDispatch, useSelector} from "react-redux"



import {
  basicTheme,
  jellyfishTheme,
  landscapeTheme,
  frozenTreeTheme,
  currantTheme
} from "../../Assets/ThemePacks"

import {
  setTheme
} from "../../state/actions"

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    "&:hover":{
      boxShadow: "0 0 3px 2pt lightgray",
      borderRadius: 5
    },
  },
  image: {
    borderRadius: 5,
    height: 30,
    width: 30,
  },
  active: {
    borderRadius: 5,
    boxShadow: "0 0 0 2pt lightgray"
  }
})

const BackgroundButton = (props) => {
  const name = useSelector(store => store.name)
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const {background, thumbnail} = props.theme
  return (
    <Grid item>
      <ButtonBase
        className={name == props.theme.name ? clsx(classes.root, classes.active) : classes.root}
        onClick={()=>dispatch(setTheme(props.theme))}>
        <img className={classes.image} src={thumbnail} />
      </ButtonBase>
    </Grid>
  )
}

const BackgroundBar = () => {
  return (
    <Box my={2}>
      <Grid container spacing={2} justify="center">
        <BackgroundButton theme={basicTheme} />
        <BackgroundButton theme={frozenTreeTheme} />
        <BackgroundButton theme={jellyfishTheme} />
        <BackgroundButton theme={landscapeTheme} />
      </Grid>
    </Box>
  )
}

export default BackgroundBar
