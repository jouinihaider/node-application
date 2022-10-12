var express = require('express');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: false}));

/* GET users listing. */
router.get('/:test', function(req, res, next) {
  console.log('res voitures ==> ',req.params.test)
  // res.send('respond with a resource voitures');
  let arr = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    }]
  res.render("products", { 'test' : 'test' });

});

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('res voitures ==> ',req.body)
  res.json('tetete');
});
 
module.exports = router;
 