const skillz = require('../skillz')
const secrets = require('../secrets')
  module.exports = {

      addHeaders: function(req, res, next) {
          res.status(200).set({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
              'X-XSS-Protection': '1; mode=block',
              'X-Frame-Options': 'SAMEORIGIN',
              'Content-Security-Policy': "default-src 'self' devmountain.github.io"

          });

          next();
      },
      generateId: function(req,res,next) {
        console.log('this is the req.body', req.body);
          var generatedId = skillz.length + 1;
          req.body.id = generatedId;
          console.log(req.body.id)
          console.log(req.body)
          next()

      },
      verifyUser: function(req,res,next){
        console.log(req.params.username,req.params.pin);
        var authUserName = 'Kia'
        var authUserPin = '1984'
        if(req.params.username === authUserName && req.params.pin === authUserPin){
          next()
        }
        else {
          res.status(403).json('Sorry! You are not Authorized!!')
        }
      }
  }
