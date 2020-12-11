# Building blog with Node js, Express, MongoDB

Steps:

1. Install MongoDB [youtube link](https://www.youtube.com/watch?v=wcx3f0eUiAw)

2. Set up the database server, and basic npm

   - `npm init -y`
   - `npm i express mongoose ejs`
   - `npm i --save-dev nodemon`
   - `npm run devStart` (after changing the package.json to `"devStart": "nodemon server.js"`)
     ![package.json snippet](/images/devstart.PNG)

3. Follow the guideline from the [youtube video](https://www.youtube.com/watch?v=1NrHkjlWVhM).

## Progress

As of now, we have 2 snippets of the projects
![snippet 1](/images/blog_p1.PNG)
![snippet 2](/images/blog_p2.PNG)

## Task

- [ ] Build database with MongoDB
- [ ] Routing the database to the id elements in articles.js and article.js
- [ ] Integrate this blog to [my portfolio.](https://www.farahanasuhaimi.com) instead of using Hashnode platform at [this link](https://blog.farahanasuhaimi.com/)
