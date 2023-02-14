# Data Analysis Interface

This project is a concept web app to provide an easy-to-use interface so that data from a business is introduced regularly and stored so that further processing can be made.

## Overview

It is based on node.js and express for the backend and react+redux for the front end. By now data is stored on a JSON file but it´s planned to move to MongoDB when getting closer to production. By now it is just a proof of concept, but it is expected to eventually be released. Its main target is small businesses that want an easy solution for data storage and analysis.

Keep in mind this is just a simple input-storage app, and still, no processing is made. 

## Structure

The app is divided into two folders, containing the backend and frontend respectively.

## Expected development

First, it is planned to deploy the app in AWS Elastic Beanstalk, taking advantage of their free EC2 use-time. Then I will check the CSS so it offers a nice view that can be used as a proof of concept.
Next, a database will be added (I´m thinking mongo) and finally some kind of login will be included.

Meanwhile, my partner will be working on the data analysis part, and we expect to get some kind of processing done in the forthcoming months.

## Installation

1. Cloning the repository.

```bash
git clone https://github.com/alemalvarez/data-analysis-web-project.git
```

2. Install the required packages.

It is needed to do so on both directories.

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

3. Populate your database (optional).

You can use your own database if needed. A python database generator is also provided in another repository which can be used and is compatible. I coded it so don't expect the highest quality.

You can clone it:

```bash
git clone https://github.com/alemalvarez/dataset_gen.git
```

4. Change needed parameters.

In backend/config.env you can choose the backend port. It is set to 5001 by default, but change it to whatever you feel like.
Also, nodemon is used by default as the npm start script. You can either install it or change backend/package.json to:

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

It is preferred to start first the backend. Navigate to the backend directory and then run
```bash
npm start
```
Do the same on the front end and a browser window with localhost:3000 should appear.

## Contributing

By now I don't have plans to go open-source. However, any suggestions are more than acceptable and I'm open to criticism since it's my first "big" project.

Fill free to contact me for anything at alemalvarez@icloud.com.




