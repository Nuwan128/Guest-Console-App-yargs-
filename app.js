const db = require('./guestDb.js');
const yargs = require('yargs');
const chalk = require('chalk');
const { string, demandOption, argv } = require('yargs');

// add
yargs.command({
    command:"add",
    discribe:"To add guest",
    builder:{
        name:{
            discribe:"Name",
            demandOption:true,
            type:"string"
        },
        address:{
            discribe:"Address",
            demandOption:true,
            type:"string"
        },
        contact:{
            discribe:"Contact Number",
            demandOption:true,
            type:"number"
        },
        date:{
            discribe:"Visit Date",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contact,argv.date);
    }
});

//update
yargs.command({
    command:"update",
    discribe:"To update guest",
    builder:{
        id:{
            discribe:"ID",
            demandOption:true,
            type:"number"
        },
        name:{
            discribe:"Name",
            // demandOption:true,
            type:"string"
        },
        address:{
            discribe:"Address",
            // demandOption:true,
            type:"string"
        },
        contact:{
            discribe:"Contact Number",
            // demandOption:true,
            type:"number"
        },
        date:{
            discribe:"Visit Date",
            // demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact,argv.date);
    }
});

//delete
yargs.command({
    command:"delete",
    discribe:"To delete guest",
    handler(arg){
        db.deleteGuest(argv.id);
    }
});

//view all guests
yargs.command({
    command:"list",
    discribe:"list all guests",
    handler(){
        db.listGuest();
    }
});

//read one gest
yargs.command({
    command:"read",
    discribe:"To read a guest",
    handler(argv){
        db.readGuest(argv.id);
    }
});

yargs.parse();