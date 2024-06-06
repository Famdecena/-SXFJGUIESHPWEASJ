const express = require('express');
const mongoose = require ('mongoose');

const routess = require('./routes/routess.js'); 
const app = express();
const PORT = process.env.PORT || 1001;


mongoose.connect('mongodb+srv://decenafam96:YmG7dIJikCPvyAdo@cluster0.nhsr4t2.mongodb.net/')
.then (() => {
  console.log('MongoDB: Yo are connected!')
}).catch ((error) => {
  console.log()
})//

app.use(express.json()); 

app.use('/api/right', routess); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
