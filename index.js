const express = require('express');
const cors = require('cors');
const app = express();
const prot = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('We will Learn Programming')
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course-detail/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course.id == id);
    res.send(courseDetails);
})

app.listen(prot, () => {
    console.log('we will learn Programming', prot)
});
