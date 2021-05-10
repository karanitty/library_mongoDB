const express = require('express');
var addauthorRouter = express.Router();
var authorData = require("../model/authorData");
function author_routers(nav){

    addauthorRouter.get('/',function(req,res){
        res.render('add_author',
        {
            title:'Add New Author',
            nav
        });
    });

    addauthorRouter.post('/add',function(req,res){

        var item = {
            name: req.body.name,
            description:req.body.description,
            image:req.body.image
        }

        var author = authorData(item);
        author.save();
        res.redirect('/authors');
    });

    return addauthorRouter;
}

module.exports = author_routers;