import React from "react"

import {
  Paper,
  Modal
} from "@material-ui/core"

const PortfolioModal = (props) => {
  return (
    <Modal open={props.modalOpen} onClose={props.onClose}>
      <Paper>
        Modal Info
      </Paper>
    </Modal>
  )
}

export default PortfolioModal
