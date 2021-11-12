const mongoose = require('mongoose');
require('dotenv').config();

const Student = require('./models/student');

const url = process.env.MONGO_URI;
mongoose
  .connect(url)
  .then(() => {
    console.log('mongoDB connected');
  })
  .catch((err) => {
    console.log(err);
  });

const studentData = [
  {
    name: 'Ido',
    surname: 'Arbel',
    birth: new Date('01/26/1998'),
    phone: '0526305421',
    gender: 'Male',
    courses: ['Java', 'Math'],
  },
  {
    name: 'Chen',
    surname: 'Halevi',
    birth: new Date('03/11/1997'),
    phone: '0526323421',
    gender: 'Male',
    courses: ['Math', 'Law'],
  },
  {
    name: 'Koren',
    surname: 'Gan-or',
    birth: new Date('01/19/1997'),
    phone: '0526305321',
    gender: 'Male',
    courses: ['JavaScript', 'Finance', 'Law'],
  },
  {
    name: 'Oryan',
    surname: 'Levy',
    birth: new Date('04/02/1998'),
    phone: '0542305321',
    gender: 'Male',
    courses: ['JavaScript', 'Law'],
  },
  {
    name: 'Yahalom',
    surname: 'Cohen',
    birth: new Date('11/03/1993'),
    phone: '0542305392',
    gender: 'Female',
    courses: ['Java', 'Law'],
  },
];
const insertStudentData = (studentData) => {
  Student.insertMany(studentData)
    .then(function () {
      console.log('Data inserted'); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};
// insertStudentData()

