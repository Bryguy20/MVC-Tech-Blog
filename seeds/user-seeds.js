const { User } = require("../models");

const userData = [
  {
    "username": "jay_bour",
    "twitter": "jayman789",
    "github": "martinb",
    "email": "jayguy@gmail.com",
    "password": "p@ssword1"
  },
  {
    "username": "matt_b",
   "twitter": "mathyb",
   "github": "mathewb",
    "email": "mathew_b@gmail.com",
   "password": "p@ssword2"
  },
  {
   "username": "shaun_c",
    "twitter": "shaungt45",
    "github": "shaun",
   "email": "shaun_c@gmail.com",
    "password": "p@ssword3"
  },
  {
   "username": "lee_n",
    "twitter": "leenorris",
   "github": "leenorris",
    "email": "lee_n@gmail.com",
   "password": "p@ssword4"
  },
  {
    "username": "priya_r",
   "twitter": "priyaravi23",
   "github": "priyaravi23",
   "email": "priya_r@gmail.com",
   "password": "p@ssword5"
  },
  {
   "username": "pooja",
   "twitter": "pooja_w",
   "github": "pooja",
   "email": "pooja@gmail.com",
  "password": "p@ssword6"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
