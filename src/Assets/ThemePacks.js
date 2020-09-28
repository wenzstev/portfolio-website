import jellyBackground from "./background-jellyfish.jpg"
import jellyThumbnail from "./thumbnail-jellyfish.jpg"

import landscapeBackground from "./background-landscape.jpg"

import frozenTreeBackground from "./frozen-tree.jpg"


export const basicTheme = {
  name: "basic",
  background: "",
  thumbnail: "",
  frontPageLinkColors: {
    about: "#F51720",
    portfolio: "#FA26A0",
    blog: "#F8D210",
    contact: "#2FF3E0"
  },
  header: {
    color: "black"
  },
  body: {
    color: "darkgray"
  },
  input: {
    backgroundColor: "lightgray",
    borderColor: "black",
    borderColorHover: "darkgray"
  }
}

export const frozenTreeTheme = {
  name: "frozenTree",
  background: frozenTreeBackground,
  thumbnail: frozenTreeBackground,
  frontPageLinkColors: {
    about: "#4E4F4A",
    portfolio: "#746B61",
    blog: "#746B61",
    contact: "#797563"
  },
  header: {},
  body: {},
  input: {}
}

export const jellyfishTheme = {
  name: "jelly",
  background: jellyBackground,
  thumbnail: jellyThumbnail,
  header: {
    color: "white"
  },
  body: {
    color: "white"
  },
  input: {
    backgroundColor: "lightgray",
    borderColor: "black",
    borderColorHover: "white"
  }
}

export const landscapeTheme = {
  name: "landscape",
  background: landscapeBackground,
  thumbnail: landscapeBackground,
  header:{},
  body: {},
  input: {}
}
