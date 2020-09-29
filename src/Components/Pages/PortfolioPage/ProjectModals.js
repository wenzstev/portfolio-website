import muiLogo from "../../../Assets/materialui-logo.png"
import htmlLogo from "../../../Assets/html-logo.png"
import reactLogo from "../../../Assets/react-logo.png"
import flaskLogo from "../../../Assets/flask-logo.png"

import souschefAbout from "../../../Assets/souschef-about.png"
import souschef2 from "../../../Assets/souschef-recipe.png"

import portfolioPreview from "../../../Assets/portfolio-preview.jpg"
import portfolioPage from "../../../Assets/portfolio-page.jpg"
import frontPageMobile from "../../../Assets/front-page-mobile.jpg"
import contactPage from "../../../Assets/contact-page.jpg"

import sprinterPreview from "../../../Assets/sprinter-preview.jpg"
import sprinterHowto from "../../../Assets/sprinter-howto.jpg"
import sprinterDownload from "../../../Assets/sprinter-download.jpg"

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
  images: [souschefAbout, souschef2],
  buttons: ["live"]
  },
  {
  title: "RecipeBox API",
  preview: flaskLogo,
  byline: "RESTful API backend for SousChef",
  description: `
    Backend for SousChef, taking the form of a RESTful API. Endpoints are exposed for all necessary resources,
    including ingredients, recipes, and grocery lists. Supports full CRUD functionality for all resources. Security
    is ensured through the generation of JSON Web Tokens that are used to verify a user's credentials. Tokens are provided
    through the use of a refresh token. Associations between resources are also exposed to provide a more REST-compliant
    way to modify them.
    `,
  stack: ["flask", "python"],
  stackDescription: `
    The application is written primarily in Flask, with additional Python libraries serving in supporting roles. BeautifulSoup
    was used to parse recipes from provided URLs, and spaCy was used as the natural language processor to extract ingredients
    from provided recipe lines. Marshmallow was used for serialization, and the database was written using the SQLAlchemy ORM.
    `,
  images: [],
  buttons: ["live", "github"]
  },
  {
    title: "Portfolio Site",
    preview: portfolioPreview,
    byline: "Responsive portfolio site created in React",
    description: `
      Showcase of technical abilities through portfolio website. Features numerous
      projects across entire technical stack. Site is fully responsive, featuring both a
      mobile and desktop version. Redux is implemented to provide a variety of themes, demonstrating
      various design choices and giving the user something to "play" with while reviewing.
    `,
    stack: ["javascript", "react", "mui", "redux", "flask"],
    stackDescription: `
      React was primarily used to build the site, including custom Material-UI components. Redux was implemented
      to provide various colors and backgrounds for the different themes. The site also features a small backend, written
      in Flask, that sends emails to my inbox when users fill out the "Contact" form.
    `,
    images: [portfolioPreview, portfolioPage, contactPage, frontPageMobile],
    buttons: ["github"]
  },
  {
    title: "Easy Draft",
    preview: sprinterPreview,
    byline: "Application to help with the first draft writing process",
    description: `
      Writing sprint app, built in React with help from Redux. Allows users to select
      the amount of time they want to write, then begins a countdown timer. Users cannot delete
      after completing a paragraph, encouraging them to continue writing and "turn off the editor."
      The first draft can be downloaded when the timer is complete. Also allows the option of a quote from
      a famous work of literature as inspiration.
      `,
    stack: ["javascript", "react", "mui", "redux"],
    stackDescription: `
      Written in React, with a small Redux store that keeps track of the chosen sprint time and whether or not
      the user wants a quote. As this was my introductory project to Material-UI, there is little custom styling; I wanted
      to familiarize myself with the library as-is first. 
      `,
    images: [sprinterPreview, sprinterHowto, sprinterDownload],
    buttons:["live", "github"]
  }
]
