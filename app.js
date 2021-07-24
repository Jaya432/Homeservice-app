const express = require('express')

var firebase = require('firebase/app')

require("firebase/firestore")

// needed variables initialize
const app = express()
const port = 3000

var firebaseConfig = {
    apiKey: "AIzaSyAkezqX_kRbOXgAW9LxTHu6EawUG0TOK1s",
    authDomain: "nodejs-85125.firebaseapp.com",
    projectId: "nodejs-85125",
    storofferBucket: "nodejs-85125.appspot.com",
    messagingSenderId: "1000860374222",
    appId: "1:1000860374222:web:fae94dc0b1c75eca85ac9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


app.set('view engine', 'ejs')

app.use(express.static('public'))

var db= firebase.firestore();

db.collection("Home Services").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const servicing = doc.data().servicing;
        const offer = doc.data().offer;
    });
});

app.get('/', (req,res) => {

    const service = [
        {servicing: 'Cleaning',whatwedo:'Full House cleaning, Bathroom cleaning, Kitchen cleaning', offer: '30% off'},
        {servicing: 'Courier Service',whatwedo:'Domestic & International couriers', offer: '10% off'},
        {servicing: 'Relocation',whatwedo:'Domestic & International couriers, Corporate Shipping, Vehicle transportation', offer: '40% off'},
        {servicing: 'Pest Control',whatwedo:'Cockroach,Rodent,Termites & Bed Bug control', offer: '50% off'},
        {servicing: 'Interior Design',whatwedo:'Lightings & Furniture designs', offer: '30% off'},
        {servicing: 'Vehicle Care', whatwedo:'Maintanance of Two Wheelers & Four Wheelers',offer: '50% off'}
    ]

    res.render('pages/home', {
        service: service,
    })
})

app.get('/about', (req,res) => {
    res.render('pages/about')
})

app.get('/contact', (req,res) => {
    res.render('pages/contact')
})



app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});