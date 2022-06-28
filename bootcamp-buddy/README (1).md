

 <!-- ![](https://i.imgur.com/XgsioqF.jpg) -->
<img src="https://i.imgur.com/XgsioqF.jpg" style="width: 200px" />

## Table Of Contents 

1. [Introduction](#athena-resource-tool-for-remote-coding-bootcampers)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Environmental Variables](#environment-variables)
5. [Tech Stack](#tech-stack)
6. [API Reference](#api-reference)
7. [Running Tests](#running-tests)
8. [About Us](#🚀-about-us)
9. [Lessons Learned](#lessons-learned)
10. [Team Github Profiles](#🔗-team-github-profiles)
11. [Acknowledgements](#acknowledgements)
12. [Badges](#badges)

# Athena Resource Tool For Remote Coding Bootcampers

Hello and thanks for your interest in our web app. 

This tool can be used to search for technical resource links, add those links to the favourites section that you find most useful, delete those you don't find useful and add links that you do. 


## Features

- Search For Resources in Database
- Add/Remove Search Links to Favourites Section
- Add/Remove New Resources to Database






## Getting Started 

### Front End.

Step 1. 

First, change into the folder you'd like the repository to live in.


Step 2. 

Git clone the front end repository. 

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran.git
```

Step 3. 

To start using the front end, do the following. 

```bash
  cd bootcamp-buddy
  npm i
  npm start
```

### Back End 


Step 1. 

First, change into the folder you'd like the repository to live in.


Step 2. 

Git clone the back end repository. 

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-shabana-jenan-dan-kendall-simran.git
```

Step 3. 

Add environment variables into your .env file in your IDE.(Details in Environment Variables section)

Step 4. 

To start using the back end, do the following. 

```bash
  npm i
  npm run dev
```






    
## Environment Variables

To run the back end repo of this project, you will need to add your own credentials from the database you're using to draw from. (e.g.: Heroku) 

In your .env file, you'll need to use the following format.

```

PGHOST=

PGUSER=

PGDATABASE=

PGPASSWORD=

PGPORT=

```

After this, first run the create table script in the terminal.

```
npm run db:createTable
```

Next, populate the table with the data from the libs folder with the following script.

```
npm run db:populateTable
```

If you'd like to drop the table completely, run the following script:

```
npm run db:dropTable

```




## Tech Stack

**Client:** React, CSS

**Server:** Node, Express, PostgreSQL


## API Reference

### To GET All Resources: 
GET http://localhost:3000/resources/

This returns the entire contents of the database.

### To GET Resources by ID: 

GET http://localhost:3000/resources/{id}

e.g. GET http://localhost:3000/resources/4

This returns:


   ``` 
    { 

 "success": true,
    
    "payload": [
        {
            "id": 4,
            "url": "https://linguinecode.com/post/react-usereducer-vs-usestate",
            "title": "React useReducer vs React useState: When to use one over the other?",
            "type": "Article",
            "topic": "React",
            "description": "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
            "isFavourite": "false"
        }
    ]

}
```

The value of isFavourite is a string instead of a boolean.

### To GET Resources by title: 
GET http://localhost:3000/resources?title=value

e.g. GET http://localhost:3000/resources?title=react

This returns:

```
{

    "success": true,
    "payload": [
        {
            "id": 2,
            "url": "https://testing-library.com/docs/react-testing-library/cheatsheet/",
            "title": "A cheatsheet for the React Testing Library",
            "type": "Documentation",
            "topic": "React",
            "description": "A short guide to all the exported functions in React Testing Library"
            "isFavourite": "false"
        },
        {
            "id": 4,
            "url": "https://linguinecode.com/post/react-usereducer-vs-usestate",
            "title": "React useReducer vs React useState: When to use one over the other?",
            "type": "Article",
            "topic": "React",
            "description": "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
            "isFavourite": "false"
        }
    ]
}
```

### To Add To Database: 

POST http://localhost:3000/resources

e.g. POST http://localhost:3000/resources

Post an object with this structure:

```

{

"url": "newurl.com",

"title": "A Title",

"type": "A Type",

"topic": "A Topic",

"description": "Your description here."

}

```

The value of id is automatically set and the value of isFavourite is automatically set to "false"

### To Update Database: 

PUT: http://localhost:3000/resources/{id}

e.g. PUT http://localhost:3000/resources/5

Update using an object with this structure:

```

{
"url": "updatedurl.com",

"title": "A Title",

"type": "A Type",

"topic": "A Topic",

"description": "Your description here."

"isFavourite": "true/false"

}

```

Reminder: the value of isFavourite is a string so update this value with a lowercase string.

### To Delete Entry From Database: 

DELETE:  http://localhost:3000/resources/{id}

e.g. DELETE http://localhost:3000/resources/5



## Running Tests

To run tests, run the following commands.. 

### Front End

The front end runs tests based from the React Testing Library. 

```bash
  npm run test
```

### Back End

The back end runs tests in Supertest and Jest. 

```bash
  npm run test
```





## 🚀 About Us
We're a group of five young, talented, ambitious full stack developers that wanted to create an app that solved the problem of accessing resources. 



## Lessons Learned

Teamwork makes the dream work.. 

Break down every problem and then do it again and again.. 

Standups and Retros really helped us keep a great rhythm and revise our plan incrementally.. 

Keep open communication and share the problems you have when needed, we’re better together.. 

Take your breaks after the mini sprints, stay hydrated and encourage everyone to take a break from the screen.. 

Let things go if need be.. Sometimes it’s just not worth it..


## 🔗 Team Github Profiles

https://github.com/DHawkesford

https://github.com/jena-84

https://github.com/srai98i

https://github.com/kendallgmason

https://github.com/shabana89


## Acknowledgements

 - [Chris Meah's Express generator module](https://www.npmjs.com/package/express-generator-esmodules)
 - [React Hooks by Robin Wieruch](https://www.robinwieruch.de/react-hooks-fetch-data/)
 - [Async functions with useeffect by devtrium](https://devtrium.com/posts/async-functions-useeffect)
 - [How to handle multiple inputs in React](https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el)
 - [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)
 - [React + Fetch - HTTP POST Request Examples | Jason Watmore's Blog](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)
 


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](/bundlephobia/:format/:packageName)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

