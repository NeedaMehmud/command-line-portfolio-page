const inquirer = require('inquirer');
const fs = require('fs');

const generateUserHTML = (userInput) =>
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Portfolio</title>
</head>

<body>
    <div class="jumbotron">
        <h1 class="display-4">Hi! My name is ${userInput.name}</h1>
        <p class="lead">I live in ${userInput.location} </p>
        <p class="lead">I love to ${userInput.hobby}</p>
        <p class="lead">If you want to connect, here is my Linkedin profile ${userInput.linkedin}</p>

        <hr class="my-4">
        <p>Checkout my project below!</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Github projects ${userInput.github}</a>
        </p>
    </div>
</body>

</html>`


inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Hello! What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?',
    },
    {
        type: 'input',
        name: 'hobby',
        message: 'What is your hobby?',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your Linkedin profile?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },




])