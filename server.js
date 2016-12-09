// =======================================================================================================================================
// variables
// =======================================================================================================================================
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
const middleWare = require('./controllers/middleware')
const mainCtrl = require('./controllers/mainCtrl')
// const skillz = require('./skillz')
// =======================================================================================================================================
// middleware
// ==========================================================================================================================================
app.use(bodyParser.json());
app.use(middleWare.addHeaders);
// =======================================================================================================================================
// endpoints
// =======================================================================================================================================
app.get('/api/name',mainCtrl.getName)
app.get('/api/location',mainCtrl.getLocation)
app.get('/api/occupations',mainCtrl.getOccupations)
app.get('/api/occupations/latest',mainCtrl.getLatestOccupation)
app.get('/api/occupations/:order',mainCtrl.getOccupationByOrder)
app.get('/api/hobbies',mainCtrl.getHobbies)
app.get('/api/hobbies/:type',mainCtrl.getHobbiesType)
app.get('/api/family',mainCtrl.getFamily)
app.get('/api/family/:gender',mainCtrl.getFamilyGender)
app.get('/api/restaurants',mainCtrl.getRestaurants)
app.get('/api/restaurants/:name',mainCtrl.getRestaurantsByName)
app.get('/api/skillz',mainCtrl.getSkillz)
app.post('/api/skillz', middleWare.generateId, mainCtrl.postSkillz)
app.get('/secrets/:username/:pin', middleWare.verifyUser, mainCtrl.getSecrets)

app.put('/api/name', mainCtrl.modifyName)
app.put('/api/location', mainCtrl.modifyLocation)
app.put('/api/hobbies', mainCtrl.modifyHobbies)
app.put('/api/occupations', mainCtrl.modifyOccupations)
app.put('/api/family', mainCtrl.modifyFamily)
app.put('/api/restaurants', mainCtrl.modifyRestaurants)


// =======================================================================================================================================
// listen/watch
// =======================================================================================================================================
app.listen(port, () => console.log('listening on port', port));
