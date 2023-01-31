# Data Analysis Interface

This project is a concept webapp with the goal of providing an easy-to-use interface so that data from a bussiness is introduced on a regular basis and stored so that further processing can be made.

## Overview

It is based on node.js and express for the backend and react+redux for the frontend. By now data is stored on a json file but it´s planned to move to mongoDB when getting closer to production. By now it is just a proof of concept, but it is expected to eventually be released. Its main target is small bussinesses which want an easy solution for data storage and analysis.

Keep in mind this is just a simple input-storage app, and still no processing is made. 

## Structure

The app is divided in two subrepositories, corresponding to the backend and frontend.

## Expected development

By now I am studying the hosting options so I can get it somewhere up and running. Then I will check the CSS so it offers a nice view that can be used as a proof of concept.
Next a database will be added (I´m thinking mongo) and finally some kind of login will be included.

Obviously, meanwhile, my partner will be working on the data analysis part, and we expect to get some kind of processing done in forecoming months.

## Installation

1. Cloning the repository.

Keep in mind that it contains two submodules, and they also need to be cloned.

```bash
git clone https://github.com/alemalvarez/data-analysis-web-project.git --recurse-submodules
```

2. Install the required packages.

It is needed to do so on both subrepository directories.

```bash
npm install
```

3. Use the example database (optional).

An example database is provided. To use it, it is needed to change the lines in /backend/controllers/sales.js

```js
const sales = require('../db/db.json');
const fields = require('../db/fields.json');
```

to 

```js
const sales = require('../db/exampledb.json');
const fields = require('../db/examplefields.json');
```

3. Populate your own database (optional).

You can use your own starting database if needed. A python database generator is also provided in another repository which can be used and is totally compatible. I coded it so don't expect the highest quality.

You can clone it:

```bash
git clone https://github.com/alemalvarez/dataset_gen.git
```

4. Change needed parameters.

In backend/config.env you can choose the backend port. It is set to 5001 by default, but change it to wathever you feel like.
Also nodemon is used by default as the npm start script. You can either install it or change backend/package.json to:

```json
{
    ...
"scripts": {
    "start" : "nodemon server.js"
  },
  ...
}
```

5. Start the server.

It is preferred to start first the backend. Navigate to backend directory and the run
```bash
npm start
```
Do the same on the frontend and a browser window with localhost:3000 should appear.

## Contributing

By now I don't have plans to go open-source. However, any suggestions are more than accepted and I'm totally open to critic since it's my first "big" project.

Fill free to contact me for anything.




