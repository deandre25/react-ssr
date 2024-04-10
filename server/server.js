import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const PORT = 8000;

const app = express();

app.use("/", (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const context = {};
      const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App users={users} />
        </StaticRouter>
      );

      fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Some error happened!");
        }

        const html = data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        res.send(html);
      });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Error fetching data!");
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
