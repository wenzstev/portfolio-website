import muiLogo from "../../../Assets/materialui-logo.png"
import htmlLogo from "../../../Assets/html-logo.png"
import reactLogo from "../../../Assets/react-logo.png"
import flaskLogo from "../../../Assets/flask-logo.png"

import souschefAbout from "../../../Assets/souschef-about.png"
import souschef2 from "../../../Assets/souschef-recipe.png"

export const portfolioModals = [
  {
  title: "SousChef",
  preview: souschefAbout,
  byline: "Meal and grocery trip planning app",
  description: `
    SousChef is a web application that allows you to save and keep track of your favorite recipes.
    Recipes can be uploaded via a url, which is run through a natural language processor that provides a
    "best guess" for the ingredients in the recipe. Users can then clean up this result. Once a recipe is saved,
    it can be added to a grocery list with the click of a button, and all ingredients in the recipe are automatically
    added. SousChef will automatically check and combine ingredients, so you never need to worry about having to
    look for the same ingredient twice.
    `,
  stack: ["javascript", "react", "mui"],
  stackDescription: "The application is written entirely in React, with some functions in vanilla JavaScript. Material-UI is used to give the application a modern feel, with custom styling to ensure it doesn't look like a discount Google offering.",
  images: [souschefAbout, souschef2]
  },
  {
  title: "RecipeBox API",
  preview: flaskLogo,
  byline: "RESTful API backend for SousChef",
  description: "Lorem ipsum",
  stack: ["flask", "python"],
  stackDescription: "Lorem ipsum dolor",
  images: [muiLogo, htmlLogo, reactLogo]
  }
]
