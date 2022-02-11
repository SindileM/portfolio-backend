const express = require('express');
const app = express.Router();
const fixArray = require('../helpers')
let Projects = [
    { 
        id:1,
        img_url: "",
        title: "",
        github: "",
        netlify: "",
    },
    { 
        id:2,
        img_url: "",
        title: "",
        github: "",
        netlify: "",
    },
    { 
        id:3,
        img_url: "",
        title: "",
        github: "",
        netlify: "",
    },
    { 
        id:4,
        img_url: "",
        title: "",
        github: "",
        netlify: "",
    },
    { 
        id:5,
        img_url: "",
        title: "",
        github: "",
        netlify: "",
    },
    { 
        id:6,
        img_url: "",
        title: "",
        github: "",
        netlify: "",
    }
];

//get all projects
app.get('/',(req, res) => {
    res.send(Projects)
});
//get 1 project
app.get('/:id',(req, res) => {
    const Project= Projects.find((Project) => Project.id == req.params.id);
    if(!Project)res.status(404).send({msg: 'Project not found'});
    res.send(Project)
});
//create a projects (push to an array)
app.post('/',(req, res)=>{
let {img_url, title, html, css, javascript, details, github, netlify}=req.body;
if (!img_url|| !title|| !html|| !css|| !javascript|| !details || !github|| !netlify)
res.status(400).send({msg: "not all information sent"});
let new_project ={
    id:Project.length +1,
    img_url,
    title,
    github,
    netlify,
};
Projects.push(new_project);
res.send(new_project);
});
//update a project (update item in array)
app.put('/:id',(req, res)=>{
let Project= Projects.findIndex((Project)=> Project.id==req.params.id);
if(!Project) res.status(404).send({msg: 'Project not found'});
let {img_url, title, html, css, javascript, details, github, netlify}=req.body;
if (img_url) Projects[Project].img_url=img_url;
if (title) Projects[Project].title=title;
if (html) Projects[Project].html=html;
if (css) Projects[Project].css=css;
if (javascript) Projects[Project].javascript=javascript;
if (details) Projects[Project].details=details;
if (github) Projects[Project].github=github;
if (netlify) Projects[Project].netlify=netlify;
res.send(Project);
});
//delete a project (remove from array)
app.delete('/:id',(req, res)=>{
Projects=Project.filter((Project) => project.id !== req.params.id);
fixArrayId(Projects);
res.send({msg:'item removed'});
});

module.exports=app

