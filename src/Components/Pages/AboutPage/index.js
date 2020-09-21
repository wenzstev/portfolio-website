import React from "react"

import InfoPage from "../../Templates/InfoPage"

import {
  Typography,
  Divider,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    margin: "20px 0px"
  }
})

const StyledDivider = () =>{
  const classes = useStyles()
  return <Divider className={classes.root} />
}

const AboutPage = () => {
  return (
    <InfoPage title="About">
      <Typography>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Typography>
      <StyledDivider />
      <Typography align="center" variant="h3">Front End</Typography>
      <StyledDivider />
      <Typography align="center" variant="h3">Back End</Typography>
    </InfoPage>
  )
}

export default AboutPage
