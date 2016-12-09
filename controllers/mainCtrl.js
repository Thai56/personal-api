const user = require('../userCtrl');
const skillz = require('../skillz')
const secrets = require('../secrets')

module.exports = {
    getName: function(req,res,next) {
      console.log('this is the username', user.name);
        res.status(200).json(user.name)
    },
    getLocation: function(req,res,next) {
        console.log('this is the user location', user.location);
        res.status(200).json(user.location)
    },
    getOccupations: function(req,res,next) {
        console.log('this is the user.occupations occupations', user.occupations);
        res.status(200).json(user.occupations)
    },
    getLatestOccupation: function(req,res,next) {
      var latestOcc = user.occupations[user.occupations.length - 1]
      console.log(latestOcc);
      res.status(200).json({
        latestOccupation:latestOcc
      })
    },
    getOccupationByOrder: function(req,res,next) {
      console.log(req.params);
      var requestedOrder = req.params.order;
      var occupations = user.occupations;
      var orderedArr;
      if(requestedOrder === 'asc'){
        orderedArr = occupations.sort();
      } else if (requestedOrder === 'desc' ){
        orderedArr = occupations.sort().reverse()
      }
      res.status(200).json(orderedArr)
    },
    getHobbies: function(req,res,next) {
      res.status(200).json(user.hobbies)
    },
    getHobbiesType: function(req,res,next) {
      var hobbyArr = user.hobbies;
      var hobbyType = req.params.type
      var hobbyRequested = hobbyArr.filter(function(hobby){
          if(hobby.type === req.params.type){
            return hobby
          }
      })
      console.log(hobbyRequested);
      res.status(200).json(hobbyRequested)
    },
    getFamily: function(req,res,next) {
      res.status(200).json(user.family)
    },
    getFamilyGender: function(req,res,next) {
      var userFamily = user.family;
      var personInFamily = userFamily.filter(function(person){
        if(person.gender === req.params.gender){
          return person;
        }
      })
      res.status(200).json(personInFamily)
    },
    getRestaurants : function(req,res,next){
      console.log(req.query.rating);
      var userRestaurants = user.restaurants.filter(function(place){
        console.log(place);
        if('gte:'+ place.rating === req.query.rating){
          return place >= place.rating;
        }
      })
      res.status(200).json(userRestaurants)
    },
    getRestaurantsByName : function(req,res,next){
      var placeName = req.params.name;
      var places = user.restaurants;
      var restaurant = places.filter(function(place){
        if(place.name === placeName){
          return place;
        }
      })
      res.status(200).json(restaurant)
    },
    getSkillz : function(req,res,next){
      console.log('before req.query',req.query);
      if (req.query) {
        console.log('if statement query',req.query);
        var skillQuery = skillz.filter(function(skill){
          if( skill.experience === req.query.experience){
            return skill;
          }
        })
        res.status(200).json(skillQuery)
      } else {
        console.log('there ws no querysting or it was not found in the array');
        res.status(200).send('there ws no querysting or it was not found in the array')
      }

    },
    postSkillz : function(req,res,next){
        skillz.push(req.body);
        res.status(200).send(skillz)
    },
    getSecrets: function(req,res,next) {
      res.status(200).send(secrets)
    },
    // ============================================================================================================================================
    // put requests
    // ================================================================================================================================================================
    modifyName : function(req,res,next) {
      user.name = req.body.name;
      res.status(200).send(user)
    },
    modifyLocation : function(req,res,next) {
      user.location = req.body.location;
      res.status(200).send(user)
    },
    modifyHobbies : function(req,res,next) {
      user.hobbies.push({ name:req.body.name, type: req.body.type})
      res.status(200).send(user)
    },
    modifyOccupations : function(req,res,next) {
      user.occupations.push(req.body.occupation)
      res.status(200).send(user)
    },
    modifyFamily : function(req,res,next) {
      user.family.push({
        name:req.body.name,
        relation:req.body.relation,
        gender:req.body.gender
      })
      res.status(200).send(user)
    },
    modifyRestaurants : function(req,res,next) {
      user.restaurants.push({
        name:req.body.name,
        type:req.body.type,
        rating:req.body.rating
      })
      res.status(200).send(user)
    }
}
