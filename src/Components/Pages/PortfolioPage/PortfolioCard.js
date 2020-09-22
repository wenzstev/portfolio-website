import React, {useState} from "react"

import {
  Card,
  Grid,
  Typography,
  Button,
  Box,
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

  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <Typography
          variant="h4"
          align="center">
        {props.name}
        </Typography>
        <Image
          src={props.preview}
          style={{height:200, padding:0}}
          imageStyle={{width: "auto", display:"block", margin:"auto", position:"static"}}
        />
        <Box mx={4} my={2}>
          <Typography>{props.byline}</Typography>
        </Box>
        <Box m={2}>
        <Grid container justify="space-evenly">
          <Grid item>
            <Button onClick={()=>setModalOpen(true)}>Description</Button>
          </Grid>
          <Grid item>
            <Button>Live Site</Button>
          </Grid>
        </Grid>
        </Box>
      </Card>
      <PortfolioModal modalOpen={modalOpen} onClose={handleClose}/>
    </Grid>
  )
}

export default PortfolioCard
