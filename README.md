# Full Stack Engineer Tech Test (Front End Version)

Technical assessment for engineer interviewees

# Prerequisites

- git
- Node.js v16+

# Installation

1. Clone the repository
2. `cd full-stack-engineer-tech-test`
3. `npm install`
4. `npm run migrate`
5. `npm run seed`

If you have any issues with installation relating to dependencies or versions, please feel free to address these issues how you see fit to enable a "clean" install.

# Start the development servers

- `npm start`

This will start the server on port 5000 and the client on port 3000.


# Codebase explained
On the backend, which lives in the `server` directory, uses Node.JS, Express, and SQLite.

The frontend lives in the `client` directory and is built using React.JS v18 and has elements of Material UI ([mui](https://www.mui.com)), and it has been bootstrapped with `create-react-app`.


# Scenario
This project will provide a user with the ability to communicate with a very basic chat bot, and will also provide analytics in relation to the chat message history exchanged between the user and the bot.

# Your task

## Server
- You have been provided with functioning endpoints:
  - `/api/chat` for sending chat messages to the server and getting a response
  - `/api/analytics` to retrieve analytics
- Swagger docs are available for both of these endpoints and can be found at `http://localhost:5000/api-docs`

## Client
- You have been provided with a React application that has routing set up to support two routes: `/chat` and `/analytics`, and these will load the respective pages. 
- The chat page is missing an implementation, the expectation is that this page will render some kind of chat interface to exchange messages with the server.
- The analytics page is missing an implementation to display information retrieved from the `/api/analytics` endpoint. You will need to create visualisations of your choosing (e.g. a table, a paginated view, or an aggregation of the data in the form of a chart or graph). You can choose to display the data in any form you wish.

For this task, we are mostly interested in how you approach the challenge, and are less interested in seeing a complete and comprehensive solution. Aim to complete this task within 3 hours, and please make a note of any aspects you would have liked to have implemented with more time.


## Good luck!
We are looking forward to what you submit, and please expect for us to discuss your implementation as part of the interview process and hear your explanations for the choices you made. We will also be particularly interested to hear about the topics which you would have liked to explore in greater detail, if you had more time.

If at any point you need any guidance or pointers, or if anything doesn't make sense, please get in touch. Otherwise please have fun and good luck!
