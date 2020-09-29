import React, {useState} from "react"

import {
  Card,
  Grid,
  Typography,
  Button,
  Box,
  ButtonBase,
  makeStyles
} from "@material-ui/core"

import Image from "material-ui-image"

import PortfolioModal from "./PortfolioModal"

const useStyles = makeStyles({
  image: {
    height: 100
  }
})

const PortfolioCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const classes = useStyles()

  const handleClose = () => setModalOpen(false)

  const {info} = props

  console.log(props.modalInfo)

  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <Grid container justify="center">
          <ButtonBase onClick={()=>setModalOpen(true)}>
            <Image
              src={info.preview}
              style={{height:200, padding:0, margin: "auto"}}
              imageStyle={{width: "auto", display:"block", margin:"auto", position:"static"}}/>
          </ButtonBase>
        </Grid>
        <Box mx={4} my={2}>
          <Typography><b>{info.title}</b> - {info.byline}</Typography>
        </Box>
        <Button variant="contained" fullWidth>Live Site</Button>
      </Card>
      <PortfolioModal modalOpen={modalOpen} onClose={handleClose} info={info}/>
    </Grid>
  )
}

export default PortfolioCard
