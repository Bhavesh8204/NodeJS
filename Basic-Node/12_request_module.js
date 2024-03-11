const req = require("request"); 

const url = "https://jsonplaceholder.typicode.com/posts/1"

req(url,(err,res,body)=>{
    if(err) console.log(err);

    console.log("status code: ",res.statusCode);
    console.log("body :",body);
})