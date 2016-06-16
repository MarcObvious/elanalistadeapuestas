#elanalistadeapuestas

AngularJs webpage for the final project 'Predicció i mostra de resultats futbolístics utilitzant algoritmes de Machine Learning'.
It connects to a nodeJs API to retrieve all the data.

The aim of this project is to build a fully functional platform containing reliable
information about football soccer past matches as well as machine-learning-based
predictions of future matches results. With this aim, a large amount of data has been
collected and used to build a database containing all the scores -among other
information- for all the matches played in three major European leagues (BBVA,
Bundesliga and Premier League) from 2013 until today.

## API
- `https://github.com/MarcObvious/api-analistadeapuestas`

### Live example
- `http://elanalistadeapuestas.com`

### Getting it up and running
1. Clone this repo from `https://github.com/MarcObvious/elanalistadeapuestas.git`
2. Run `npm install`
3. Run `gulp dev` in order to test the page

### Getting the webpage into the server
1. Run `gulp prod`
2. `scp -r build/* code@elanalistadeapuestas.com:/home/code/boot-analista`


## Boilerplate forked from:
- `https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate`

![Alt text](/app/images/wall_2_1920.jpg?raw=true "Image1")


[View contributors](https://github.com/MarcObvious/elanalistadeapuestas/graphs/contributors)
