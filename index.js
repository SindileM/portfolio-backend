const express = require('express');
const cors = require('cors');
const projectRoute = require('./route/projectRoute');
const contactRoute = require('./route/contactRoute');
const testimonialsRoute = require('./route/testimonialsRoute');

const app = express();
app.use(express.json());
app.use(cors())

app.get('/',(req, res) => {
    res.send({msg:"Sindile's portfolio backend"})
});

app.use("/projects", projectRoute);
app.use("/contact", contactRoute);
app.use("/testimonials", testimonialsRoute);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port} ...`));