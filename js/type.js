var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Fullstack Web Developer')
    .pauseFor(800)
    .deleteAll()
    .typeString('Programmer')
    .pauseFor(800)
    .deleteAll()
    .typeString(' Developer')
    .pauseFor(800)
    .deleteAll()
    .typeString('Quick learner')
    .pauseFor(800)
    .deleteAll()
    .typeString('Machine Learning Enthusiast')
    .pauseFor(3200)
    .start();