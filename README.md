## iterable (tech-blog)

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

- [Description ](#description)
- [Installation and Usage](#installation-and-use)
- [License](#license)

![screenshot-top-of-page](assets/images/demo1.png)
![screenshot-project-example](assets/images/demo2.png)

# Description

This app is built with Node.js, Express, MySQL and Handlebars, and provides a basic blog platform, where multiple users can register, create posts, and interact via comments.

This page has been deployed on Heroku, and can be accessed here: https://evening-depths-19981.herokuapp.com/

# Installation and Use

Clone the repo and open the folder in the code editor of your choice.

Create the database in MySQL Workbench by running the commands found in schema.sql.

Next, install the necessary dependencies by running the following command from the terminal in the root directory:

```
npm i
```

You will also need to set up the .env file in order to connect to the server. You can do so by renaming .env.EXAMPLE to .env, and adding your MySQL Workbench username and password in the appropriate spaces.

It is not necessary to seed the database, but you can do so if you wish by running the following command:

```
npm run seed
```

Otherwise, once the app is running, you can simply create new users and begin adding content. To start the app, you must first run the following command:

```
npm run start
```

or

```
npm run watch
```

and then open a new browser tab to 127.0.0.1:3001.

# License

[MIT License](https://opensource.org/licenses/MIT)
