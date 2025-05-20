const express = required("express")
const app = express()


app.get("/", (req, res) => {
    res.send("hello, world!")
});


app.listen(3000, () => {
    console.log("Gym membership (Node.JS) server started")
});
