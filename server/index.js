require('dotenv').config();
const { API_ID,API_KEY,API_URL,PORT } = process.env;
const express = require('express');
const app = express();
const axios = require('axios');
const { application } = require('express');
const mongoose = require("mongoose");

app.use(express.json());



app.get('/api/all',async (req,res) => {
  console.log(req.query.category, req.query.location)
  try{
    if(req.query.category && req.query.location){
      const category = req.query.category;
      const location = req.query.location;
      const apiURL = `${API_URL}&app_id=${API_ID}&app_key=${API_KEY}&what=${category}&where=${location}`;
      const result = await axios.get(apiURL)
      res.status(200).send(result.data)
    } else if (req.query.category) {
      const category = req.query.category;
      const apiURL = `${API_URL}&app_id=${API_ID}&app_key=${API_KEY}&what=${category}`;
      const result = await axios.get(apiURL)
      res.status(200).send(result.data)
    } else if (req.query.location) {
      const location = req.query.location;
      const apiURL = `${API_URL}&app_id=${API_ID}&app_key=${API_KEY}&where=${location}`;
      const result = await axios.get(apiURL);
      res.status(200).send(result.data)
    }else {
      const apiURL = `${API_URL}&app_id=${API_ID}&app_key=${API_KEY}`;
      const result = await axios.get(apiURL)
      res.status(200).send(result.data)
    }
  }catch(err){
    res.status(500).send(err)
  }
});


app.listen(PORT,() => { console.log(`Server running on port ${PORT}...`); },);