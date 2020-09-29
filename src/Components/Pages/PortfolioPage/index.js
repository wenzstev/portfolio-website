import React, {useState} from "react"

import InfoPage from "../../ReusableComponents/InfoPage"
import PortfolioCard from "./PortfolioCard"

import {
  Grid
} from "@material-ui/core"
import flaskLogo from "../../../Assets/flask-logo.png"

import {
  portfolioModals
} from "./ProjectModals"

const PortfolioPage = () => {
  return (
    <InfoPage title="Portfolio">
      <Grid container spacing={3}>
        {portfolioModals.map((item, index)=>(
          <PortfolioCard key={index} info={item} />
        ))}
      </Grid>
    </InfoPage>
  )
}

export default PortfolioPage
