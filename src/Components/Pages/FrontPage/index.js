import React from "react"
import {
  useTheme
} from "@material-ui/core/styles"
import {
  Container,
  Box,
  Typography,
  ButtonBase,
  Grid,
  makeStyles,
  useMediaQuery
} from "@material-ui/core"

import ButtonLink from "./ButtonLink"
import InfoPage from "../../ReusableComponents/InfoPage"

import {useSelector} from "react-redux"



const BLOGURL = "https://wenzstev.github.io"

const AboutLink = () => {
  const aboutColor = useSelector(store=>store.buttons.about)
  return <ButtonLink to="/about" backgroundColor={aboutColor} text="About" />
}

const PortfolioLink = () => {
  const portfolioColor = useSelector(store=>store.buttons.portfolio)
  return <ButtonLink to="/portfolio" backgroundColor={portfolioColor} text="Portfolio" />
}

const BlogLink = () => {
  const blogColor = useSelector(store=>store.buttons.blog)
  return <ButtonLink external to={BLOGURL} backgroundColor={blogColor} text="Blog" />
}

const ContactLink = () => {
  const theme = useTheme()
  const contactColor = useSelector(store=>store.buttons.contact)
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return <ButtonLink height={matches ? 60 : null} to="/contact" backgroundColor={contactColor} text="Contact"/>
}

const FrontPage = () => {
  const headerClass = useSelector(store=>store.header)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <InfoPage>
      <Box m={5} />
      <Typography style={headerClass} align="center" variant={matches ? "h1" : "h2"}>Steve Wenzel</Typography>
      {matches ?
         <Typography style={headerClass} align="center" variant="h3">Fullstack Developer</Typography>
          :null}
      <Box m={3} />
      <Grid container>
        <Grid item xs={12} sm={4}>
          <AboutLink />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioLink />
        </Grid>
        <Grid item xs={12} sm={4}>
          <BlogLink />
        </Grid>
        <Grid item xs={12}>
          <ContactLink />
        </Grid>
      </Grid>
    </InfoPage>
  )
}

export default FrontPage
