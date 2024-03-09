const person ={
    firstname : "bhavesh",
    subject: "MERN"
}

const converttojson = function(person){
    const jsonval = JSON.stringify(person)
    console.log("json value: ",jsonval);
    console.log("js value :",person);

    const jsval = JSON.parse(jsonval)
    console.log("js value : ",jsval);

}

converttojson(person)