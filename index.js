const inquirer = require('inquirer');
const fs = require('fs');


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
        <h1 class="display-4">Hi! My name is ${userName}</h1>
        <p class="lead">I live in ${userLocation} </p>
        <p class="lead">I love to ${userHobby}</p>
        <p class="lead">If you want to connect, here is my Linkedin profile ${userLinkedIn}</p>

        <hr class="my-4">
        <p>Checkout my project below!</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Github projects ${userGithub}</a>
        </p>
    </div>
</body>

</html>`


inquirer.prompt({


})