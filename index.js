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

const query = async () => {
  //get all students
  const allStudents = await Student.find({});
  // get all students with name set to "Ido"
  const idos = await Student.find({ name: 'ido' });
  // get all students where courses include "Law"
  const lawStudents = await Student.find({ courses: { $in: ['Law'] } });
  // get all students where courses include "Java" and gender set to "Female"
  const javaFemaleStudents = await Student.find({
    $and: [{ courses: { $in: ['Java'] } }, { gender: 'female' }],
  });
  // get all students where birth > 05/05/1998
  const bornAfterStudents = await Student.find({
    birth: { $gt: new Date('05/05/1998') },
  });
  // get all students where phone starts with 054
  const partnerStudents = await Student.find({ phone: /^054/ });
};
// query();

const update = async () => {
  //   add a JavaScript course to the students where name set to "Yahalom"
  await Student.updateMany(
    { name: 'Yahalom' },
    { $push: { courses: 'JavaScript' } }
  );
  //   update the birth to 02/12/1998 where name set to "Koren"
  await Student.updateMany(
    { name: 'Koren' },
    { birth: new Date('02/12/1998') }
  );
};
// update();

const search = async () => {
  // find all students that have a name that contains the letter "o"
  const oInNameStudents = await Student.find({ name: /o/ });
  // find all students that have a surName that contains the letter "h" or "y"
  const HorYInSurnameStudents = await Student.find({ name: /[hy]/ });
};
// search();

