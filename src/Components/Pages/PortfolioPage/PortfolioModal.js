import React from "react"

import {
  Paper,
  Modal,
  Grid,
  GridList,
  Typography
} from "@material-ui/core"

import Image from "material-ui-image"

const PortfolioModal = (props) => {
  console.log(JSON.stringify(props.modalInfo))
  const {title, description, stack, images} = props.info
  return (
    <Modal open={props.modalOpen} onClose={props.onClose}>
      <Paper>
        <Typography variant="h3">{title}</Typography>
        <Typography>
          {description}
        </Typography>
        <Typography variant="h4">Stack</Typography>
        <Grid container>
          {props.stackButtons}
        </Grid>
        <Typography variant="h4">Additional Images</Typography>
        <GridList>
          {props.images}
        </GridList>
      </Paper>
    </Modal>
  )
}

export default PortfolioModal
