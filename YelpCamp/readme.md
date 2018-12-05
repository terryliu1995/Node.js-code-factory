* add landing page
* add compgrounds page

each compgrounds
* name
* image

data:
[
    {   name :
        image:
    }
]

# creating new campgrounds
* setup new campground
* add in body parser
* setup route
* add basic unstyled form

# Restful routes
name        url         verb        description
============================================
INDEX       /dogs       GET     Display a list of all dogs
NEW         /dogs/new   GET     Displays form to make a new dogs
CREATE      /dogs       POST    add new dog to db
SHOW        /dogs/:id   GET     shows info about one dog

RESTFUL ROUTES

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dogs
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments      POST