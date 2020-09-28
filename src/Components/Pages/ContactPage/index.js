import React from "react"

import {
  Typography,
  InputBase,
  Box,
  Button,
  makeStyles
} from "@material-ui/core"

import {useSelector} from "react-redux"

import InfoPage from "../../ReusableComponents/InfoPage"

const useStyles = makeStyles({
  root: {
    "& div":{
      padding: 0
    },
    "& textarea, & input":{
      padding: 10,
      borderRadius: "inherit",
      border: inputClass=>`1px solid ${inputClass.borderColor}`,
      backgroundColor: inputClass=>inputClass.backgroundColor,
      borderRadius: 4,
      "&:focus-within, &:hover":{
        border: inputClass=>`1px solid ${inputClass.borderColorHover}`
      },
    },
  }
})

const StyledField = (props) => {
  const inputClass = useSelector(store=>store.input)
  const classes = useStyles(inputClass)

  return (
    <Box className={classes.root} mx={2} my={1}>
      <InputBase
        id={props.id}
        placeholder={props.label}
        multiline={props.multiline}
        rows={props.multiline ? 4 : 1}
        fullWidth/>
    </Box>
  )
}

const ContactPage = () => {
  const bodyClass = useSelector(store=>store.body)
  return (
    <InfoPage title="Contact">
      <Box mx={2}>
        <Typography style={bodyClass}>Drop me a message with your name and email, and I'll get back to you as soon as possible!</Typography>
      </Box>
      <form autocomplete="off" onSubmit={()=>alert("Submitted!")}>
        <StyledField id="name" label="Name" />
        <StyledField id="email" label="Email" />
        <StyledField id="message" label="Message" multiline />
        <Box align="center">
          <Button type="submit" variant="contained">Submit</Button>
        </Box>
    </form>
    </InfoPage>
  )
}

export default ContactPage
