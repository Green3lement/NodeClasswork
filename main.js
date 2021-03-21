const express = require("express"), app = express(),
homeController = require("./controllers/homeController"),
ErrorController = require("./controllers/errorController"),
layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", homeController.showIndex);

app.use(express.static("public"))

app.use(
    express.urlencoded({
        extended:false
    })
);

app.use(express.json());

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(ErrorController.pageNotFoundError);
app.use(ErrorController.internalServerError);

app.listen(app.get('port'), () => {
    console.log(`Server is running on port: ${app.get("port")}`)
});

