// fs modual : file system modeal which is used to handle file

// utf-8 is a character encoding system. it lets you represent character as ascii text.

// utf : unoicorn transformation formate

// we can perform below operations with fs modual read,write,delete,update,rename.

const fs = require("fs")

fs.readFile("bhavesh.txt",function(err,data){
    console.log(data)
})

fs.readFile("bhavesh.txt","utf-8",function(err,data){
    if(err) throw err;
    console.log(data)
})