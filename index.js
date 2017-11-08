const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
  res.send({'name': 'Ashish'});
});

app.listen(PORT, ()=>{
  console.log(`Started server on port ${PORT}`);
});
