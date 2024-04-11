import React from "react";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import express from "express";
import fs from "fs";
import path from "path";
import App from "../src/App";
import UserDetailsPage from "../src/pages/UserDetailsPage/UserDetailsPage";
import UserPosts from "../src/pages/UserPosts/UserPosts";
import UserAlbums from "../src/pages/UserAlbums/UserAlbums";
import PhotosPage from "../src/pages/PhotosPage/PhotosPage";

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
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
        };

        const html = data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        res.send(html);
      });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Error fetching data!");
    });
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      const context = {};
      const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <UserDetailsPage user={user} />
        </StaticRouter>
      );

      fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Some error happened!");
        };

        const html = data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        res.send(html);
      });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Error fetching data!");
    });
});

app.get('/users/:userId/posts', (req, res) => {
  const userId = req.params.userId;
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
      const context = {};
      const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <UserPosts posts={posts} userId={userId} />
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

app.get('/users/:userId/albums', (req, res) => {
  const userId = req.params.userId;
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    .then(response => response.json())
    .then(albums => {
      const context = {};
      const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <UserAlbums albums={albums} userId={userId} />
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

app.get('/users/:userId/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(response => response.json())
    .then(photos => {
      const context = {};
      const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <PhotosPage photos={photos} />
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
