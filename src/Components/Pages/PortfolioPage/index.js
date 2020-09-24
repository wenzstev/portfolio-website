import React, {useState} from "react"

import InfoPage from "../../ReusableComponents/InfoPage"
import PortfolioCard from "./PortfolioCard"

import {
  Grid
} from "@material-ui/core"
import flaskLogo from "../../../Assets/flask-logo.png"

import {
  testModal
} from "./ProjectModals"

const PortfolioPage = () => {
  return (
    <InfoPage title="Portfolio">
      <Grid container>
        <PortfolioCard
          name="test"
          preview={flaskLogo}
          byline="A portfolio project."
          modalInfo={testModal}
          />
      </Grid>
    </InfoPage>
  )
}

export default PortfolioPage
