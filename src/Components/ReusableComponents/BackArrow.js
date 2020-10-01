import React from "react"

import {withRouter} from "react-router-dom"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

import {
  ButtonBase
} from "@material-ui/core"

const BackArrow = (props) => (
  <ButtonBase onClick={()=>props.history.goBack()}>
    <ArrowBackIcon />
  </ButtonBase>
)

export default withRouter(BackArrow)
