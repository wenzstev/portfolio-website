import React, {useState} from "react"

import InfoPage from "../../Templates/InfoPage"
import PortfolioCard from "./PortfolioCard"

import {
  Grid
} from "@material-ui/core"
import flaskLogo from "../../../Assets/flask-logo.png"

const PortfolioPage = () => {
  return (
    <InfoPage title="Portfolio">
      <Grid container>
        <PortfolioCard
          name="test"
          preview={flaskLogo}
          byline="A portfolio project."
          />
      </Grid>
    </InfoPage>
  )
}

export default PortfolioPage
