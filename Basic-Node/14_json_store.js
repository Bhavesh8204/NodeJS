const fs = require("fs");

const person = {
    firstname: "bhavesh",
    subject: "MERN"
}

const saveData = function (person) {

    const jsonvalue = JSON.stringify(person)
    fs.writeFile("json.txt", jsonvalue,function(err,data,res){
        console.log("drecord added..!");
    })
}

saveData(person)










