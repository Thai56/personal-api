///////////////
//userCtrl.js//
///////////////
var user = {
  name: "Thai",
  location: "Provo",
  occupations: ["Student","Junior Junior Junior Dev","Seafood Clerk","Programmer"],
  hobbies: [
    {
      name: "Cooking",
      type: 'past'
    },
    {
      name: "Running",
      type: 'current'
    },
    {
      name: "Traveling",
      type: "current"
    }
  ],
  family: [
    {
      name: "Tom",
      relation: "dad",
      gender: "male"
    },
    {
      name: "Sadie",
      relation: "wife",
      gender: "female"
    },{
      name: "Kim",
      relation: "mother",
      gender: "female"
    }
  ],
  restaurants: [
    {
      name: "pho",
      type: "vietnamese",
      rating: 5
    },
    {
      name: "taco",
      type: "mexican",
      rating: 4
    },
    {
      name: "house",
      type: "home",
      rating: 3
    }
  ]
}
module.exports = user;
