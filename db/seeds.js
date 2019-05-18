const mongoose = require('mongoose');
const environment = require('../config/environment');
const Moustache = require('../models/moustache');
const User = require('../models/user');

mongoose.connect(environment.dbUri);

const userIds = [
  '5be98b538aecb6a8ee89466a',
  '5be98b508aecb6a8ee894668'
];
const userData = [
  {
    _id: userIds[1],
    username: 'Billy',
    email: 'billy@willy.org',
    password: 'pass'
  },   {
    _id: userIds[0],
    username: 'Tilly',
    email: 'tilly@willy.org',
    password: 'pass'
  }
];

const moustacheData = [{
  name: 'Fu Manchu',
  countryOfOrgin: 'China',
  bushiness: 2,
  image: 'http://dbsjeyaraj.com/dbsj/wp-content/uploads/2015/06/FMCL.jpg'
}, {
  name: 'The Salvador Dali',
  countryOfOrgin: 'Spain',
  bushiness: 1,
  image: 'http://2.bp.blogspot.com/_3yidX0zYbZs/TOAspOqjUZI/AAAAAAAADA8/JXFbdi4eYDs/s1600/portrait-of-salvador-dali-1954.jpg'
}, {
  name: 'Handlebars',
  countryOfOrgin: 'England',
  bushiness: 2,
  image: 'http://i2.wp.com/supra-quintessence.com/wp-content/uploads/2012/08/handlebar-moustache-club-by-Rokas-Darulis-3.jpg?resize=960%2C960'
}, {
  name: 'Magnum P. I.',
  countryOfOrgin: 'America',
  bushiness: 3,
  image: 'http://beard.pictures/wp-content/uploads/2018/03/Tom-Selleck.jpg'
}
];


Moustache.collection.drop();
User.collection.drop();

Moustache.create(moustacheData)
  .then(moustaches => {
    console.log(`${moustaches.length} moustaches have been added`);
    User.create(userData)
      .then(users => {
        console.log(`Created ${users.length} users`);
        mongoose.connection.close();
      });
  });
