require("dotenv").config();

// Web server config
const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");


const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userApiRoutes = require("./routes/users-api");
const recipesApiRoutes = require("./routes/recipes-api");

<<<<<<< HEAD
app.use("/api/users", userApiRoutes);
app.use("/api/recipes", recipesApiRoutes);
=======
//use cookie sessions
app.use(cookieSession({
  name: 'session',
  keys: ['MySecret']
}));

//import routes
const loginRoutes = require('./routes/login');
const recipeApiRoutes = require('./routes/recipe-api');
const signUpApiRoutes = require('./routes/signUp');


//use routes
app.use('/api/login', loginRoutes);
app.use('/api/recipe', recipeApiRoutes);
app.use('/api/signUp', signUpApiRoutes);

//TODO: remove only for testing 
app.get('/', (req, res) => {
  res.status(200).json({message: 'success'});
});
>>>>>>> 810cd115229d5723bd22035691566c7fe9efea16

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
