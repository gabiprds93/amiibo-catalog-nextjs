# About Project

In this web application, you can find all Amiibos figures by [Nintendo](https://www.nintendo.com/es_LA/amiibo/).

Only on the Home page, you can be filtered by Type and Character, also can be seen all Amiibo Series as categories in Categories Menu and then go to a Categories page. You can search by name in the Search Bar and go to the Results page for a more specific search. In each Amiibo item, there is a heart to add it to favorites, you can see the complete list on the Favorites page. You can also sort the Amiibos in ascending or descending alphabetical order. And last but not least there is a Switch to change from light mode to dark mode and vice versa. Don't just judge me by the colors, please, I did the best I can. :relieved::blush:

# Tech stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) adding [TypeScript](https://github.com/Microsoft/TypeScript).

The following libraries were also used:
- [Axios](https://axios-http.com/) to consume API.
- [React query](https://react-query.tanstack.com/) to data synchronozation.
- [React responsive](https://github.com/contra/react-responsive) to handle media queries.
- [React togle](https://github.com/aaronshaf/react-toggle) for switch component.

[Context API](https://reactjs.org/docs/context.html) was used as state manager.

The style preprocessor [Sass](https://sass-lang.com/) was also used.

[AmiiboAPI](https://www.amiiboapi.com/) was used to obtain the Amiibos data.

# How to install and run the project

- First, you need to copy the URL to clone the project.
  
- Second, in a folder on your computer, you have to open the command console and run the following command and paste the URL you copied:
  
  `git clone [url]`

- Then open the project in your favorite IDE and the command console in that root.

- The next step is to install the dependencies with the following command:
  
   `npm install`

- Finally, to get the project up you have to run the following command:

  `npm start`

You can test the web application in this [link](https://amiibos.vercel.app/) hosted on [Vercel](https://vercel.com/).

####Enjoy it! :smile:

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
