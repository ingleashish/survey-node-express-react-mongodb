const express = require('express');
require('./services/authService');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

authRoutes(app);


app.listen(PORT, ()=>{
  console.log(`Started server on port ${PORT}`);
});
