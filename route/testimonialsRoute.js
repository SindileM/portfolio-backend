const express = require('express');
const app = express.Router();
const fixArrayId = require('../helpers');
let testimonials= [
    { 
        "id": "1",
        "img_link": "https://i.postimg.cc/k5GFYrrd/Alex-Sexwale.jpg",
        "title": "Lecturer",
        "name": "Alex Sexwale",
        "text": "Sindile is a bright and talented individual. She brings joy to all her peers and works hard.",
        "email": "alex@lifechoices.com"
    },
    { 
        "id": "2",
        "img_link": "https://i.postimg.cc/DwVNCKPb/craigee-min.jpg",
        "title": "Colleague",
        "name": "Craig Braaf",
        "text": "Sindile is a bright soul and embodies it too. She is quick, witty and funny and always brings her A game when participating in group work and personal projects. She possesses immense confidence within herself and it reflects in her work. She never steers away from helping others and putting a smile on your face. Any company would be lucky to call Sindile their employee.",
        "email": "braafcraig@gmail.com"
    },
    { 
        "id": "3",
        "img_link": "https://i.postimg.cc/dQZPnncp/Emihle2-min.jpg",
        "title": "Colleague",
        "name": "Emihle Cebisa",
        "text": "Sindile is a people's person she is reliable,trustworthy and professional  she would be a great asset to any company she joins and personally i wish her nothing but the best in he career.",
        "email": "mihlekcebisa@gmail.com"
    },
    { 
        "id": "4",
        "img_link": "https://i.postimg.cc/sx4JKtj5/tursha-min.png",
        "title": "Colleague",
        "name": "Tursha Arendse",
        "text": "This young lady is what one will describe as a ray of sunshine. She honestly has the best personality which makes her such a joy to work with. But don't let her loving personality fool you because she is a tough cookie too. When i think of hard-working and determined I think of Sindi. You won't regret working with her.",
        "email": "turshaarendse@gmail.com"
    },
    { 
        "id": "5",
        "img_link": "https://i.postimg.cc/JhT03KCt/Lindokuhle3-min.jpg",
        "title": "Colleague",
        "name": "Lindokuhle Nkamela",
        "text": "I met Sindile from life choices academy, she is one of the smart, hard working ladies i ever come across. She is a people's person. She really enjoying doing public speaking. Cindy is very dedicated, kind and has a good ear when you need her.",
        "email": "lindokuhlenkamela@gmail.com",
    },
    { 
        "id": "6",
        "img_link": "https://i.postimg.cc/y6X1Fs4W/Zanele1-min.jpg",
        "title": "Colleague",
        "name": "Ntombizanele Moni",
        "text": "Sindile is someone who I am always happy to be around. She knows when to have fun and when to work hard.",
        "email": "zanelemoni4@gmail.com"
    },
];

//get all testimonials
app.get('/',(req, res) => {
    res.send(testimonials)
});

//get 1 testimonial
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
    testimonials.push(new_testimonial);
    res.send(new_testimonial);
    });

    //update a testimonial (update item in array)
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