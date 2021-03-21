var courses = [
    {
        title: "Chocolate Fudge",
        cost: 50
    },
    {
        title: "Fries",
        cost: 150
    },
    {
        title: "Cat",
        cost: 500
    },

]

exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses:courses});
}

exports.showSignUp = (req, res) => {
    res.render("contact");
}

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
}

exports.showIndex = (req, res) => {
    res.render("index");
}