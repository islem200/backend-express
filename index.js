const express = require("express");
const { logger } = require("./middlewares/logger");
const { auth } = require("./middlewares/auth");
const coursesRoutes = require("./routes/coursesRoutes");
const colors = require("colors");
const Course = require("./modules/course");
const connectToDB = require("./DB/db");

const app = express();

connectToDB();

//app.set('view engine', 'pug');
//app.set('views', './views')

// app.use(logger);
// app.use(auth);
app.use(express.json());
app.use("/api/courses", coursesRoutes);

async function createCourse() {
  try {
    const course = new Course({
      name: "Node.js",
      author: "Mossy smith",
      price: 15,
    });
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function seedDB() {
  try {
    await Course.create([
      {
        name: "Node.js",
        author: "Mossy Smith",
        price: 15,
      },
      {
        name: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        price: 25,
      },
      {
        name: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        price: 20,
      },
      {
        name: "You Don't Know JS",
        author: "Kyle Simpson",
        price: 30,
      },
      {
        name: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        price: 35,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

async function getCourses() {
  try {
    const result = await Course.find({
      price: { $lt: 25 },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function getCourses2() {
  try {
    const result = await Course.find({
      name: /.*javascript.*/i,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

async function updateCourses() {
  try{
    const course = await Course.findById('671a6d472ca42125805f9b90')

    
    if(!course)return
    course.name = "C++"
    course.save()
  }catch(error){
    console.log(error)
  }
  
};

updateCourses()

//getCourses()
//getCourses2();
//createCourse()
//seedDB()
//create end points
//app.use(express.static('public')); //accepte css html img....

//  app.get('/', (req, res)=>{
//   res.render('index', {
//     title: 'My Pug Page',
//     message:'Hello Express courses',
//     courses
//   })
//  })

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
