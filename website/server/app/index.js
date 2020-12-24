const express = require('express');
const path = require('path');

function startApp(port, middlewares) {
  const app = express();

  if(middlewares && middlewares.length > 0) {
    middlewares.forEach((middleware) => app.use(middleware));
  }

  app.use(express.static('public'));
  
  app.get('/*', (_req, res) => {
    console.log("getting /")
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
  });


  app.listen(port, () => {
    console.log(`Express listening at ${port}`);
  });
}

module.exports = startApp;
