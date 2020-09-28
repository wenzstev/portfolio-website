
export const setTheme = (value) => {
  return {
    type: "SETTHEME",
    payload: value
  }
}

export const setBackground = (value) => {
  return {
    type: "SETBACKGROUND",
    payload: value
  }
}
