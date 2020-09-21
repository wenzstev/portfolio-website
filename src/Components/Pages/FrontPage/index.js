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


const AboutLink = () => {
  return <ButtonLink to="/about" backgroundColor="teal" text="About" />
}

const PortfolioLink = () => {
  return <ButtonLink to="/portfolio" backgroundColor="tomato" text="Portfolio" />
}

const BlogLink = () => {
  return <ButtonLink to="/blank" backgroundColor="SlateBlue" text="Blog" />
}

const ContactLink = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return <ButtonLink height={matches ? 60 : null} to="/contact" backgroundColor="Gray" text="Contact"/>
}

const FrontPage = () => {
  return (
    <Container>
      <Box m={5} />
      <Typography align="center" variant="h1">Steve Wenzel</Typography>
      <Typography align="center" variant="h3">Fullstack Developer</Typography>
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
    </Container>
  )
}

export default FrontPage
