import React from "react"

import {
  Typography,
  TextField,
  Box,
  Button,
} from "@material-ui/core"

import InfoPage from "../../ReusableComponents/InfoPage"

const StyledField = (props) => (
  <Box mx={2} my={1}>
    <TextField
      id={props.id}
      label={props.label}
      multiline={props.multiline}
      rows={props.multiline ? 4 : 1}
      fullWidth
      variant="outlined" />
  </Box>
)

const ContactPage = () => {
  return (
    <InfoPage title="Contact">
      <Box mx={2}>
        <Typography>Drop me a message with your name and email, and I'll get back to you as soon as possible!</Typography>
      </Box>
      <form onSubmit={()=>alert("Submitted!")}>
        <StyledField id="name" label="Name" />
        <StyledField id="email" label="Email" />
        <StyledField id="message" label="Message" multiline />
        <Box align="center">
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Box>
    </form>
    </InfoPage>
  )
}

export default ContactPage
