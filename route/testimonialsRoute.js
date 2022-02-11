const express = require('express');
const app = express.Router();
const fixArrayId = require('../helpers');
let testimonials= [
    { 
        "id": "1",
        "img_link": "",
        "name": "",
        "text": "",
        "email": ""
    },
    { 
        "id": "2",
        "img_link": "",
        "name": "",
        "text": "",
        "email": ""
    },
    { 
        "id": "3",
        "img_link": "",
        "name": "",
        "text": "",
        "email": ""
    },
    { 
        "id": "4",
        "img_link": "",
        "name": "",
        "text": "",
        "email": ""
    },
    { 
        "id": "5",
        "img_link": "",
        "name": "",
        "text": "",
        "email": ""
    },
];

//get all testimonials
app.get('/',(req, res) => {
    res.send(testimonials)
});

//get 1 project
app.get('/:id',(req, res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if(!testimonial)res.status(404).send({msg: 'testimonial not found'});
    res.send(testimonial)
});  

//create a testimonial (push to an array)
app.post('/',(req, res)=>{
    let {img_link, title, name, text, email}=req.body;
    if (!img_link|| !title|| !name|| !text|| !email)
    res.status(400).send({msg: "not all information sent"});
    let new_testimonial ={
        id:testimonials.length +1,
        img_link,
        title,
        name,
        text,
        email,
    };
    testimonial.push(new_testimonial);
    res.send(new_testimonial);
    });

    //update a project (update item in array)
app.put('/:id',(req, res)=>{
    let testimonial = testimonials.findIndex((testimonial)=> testimonial.id==req.params.id);
    if(!testimonial) res.status(404).send({msg: 'testimonial not found'});
    let {img_link, title, name, text, email}=req.body;
    if (img_link) testimonials[testimonial].img_url=img_url;
    if (title) testimonials[testimonial].title=title;
    if (name) testimonials[testimonials].name=name;
    if (text) testimonials[testimonial].text=text;
    if (email) testimonials[testimonial].email=email;
    res.send(testimonial);
    });

    //delete a testimonial (remove from array)
app.delete('/:id',(req, res)=>{
    testimonials=testimonials.filter((testimonial) => testimonial.id !== req.params.id);
    fixArrayId(testimonials);
    res.send({msg:'testimonial removed'});
    });
module.exports=app