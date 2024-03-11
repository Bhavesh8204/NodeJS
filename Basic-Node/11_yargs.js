const yargs = require("yargs")

yargs.command({
    command:"add",
    describe:"to add something",
    builder:{
        num1 : {
            type:"number",
        },
        num2 : {
            type:"number",
        }
    },
    handler: function(argv){
        console.log(argv.num1 , argv.num2);
    }
})

yargs.argv
// console.log(yargs.argv);