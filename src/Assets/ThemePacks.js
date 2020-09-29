import jellyBackground from "./background-jellyfish.jpg"
import jellyThumbnail from "./thumbnail-jellyfish.jpg"

import landscapeBackground from "./background-landscape.jpg"

import frozenTreeBackground from "./frozen-tree.jpg"

import forestBackground from "./fog-1535201.jpg"

export const basicTheme = {
  name: "basic",
  background: forestBackground,
  thumbnail: forestBackground,
  frontPageLinkColors: {
    about: "#1C3C51",
    portfolio: "#546B86",
    blog: "#547484",
    contact: "#BFD3E5"
  },
  header: {
    color: "black"
  },
  body: {
    color: "black"
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
  frontPageLinkColors: {
    about: "#999583",
    portfolio: "#5B7189",
    blog: "#76868C",
    contact: "#0E1216"
  },
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
  frontPageLinkColors: {
    about: "#D8D0C7",
    portfolio: "#8DA7C5",
    blog: "#76868C",
    contact: "#646745"
  },
  header:{
    color: "white"
  },
  body: {
    color: "white"
  },
  input: {}
}
