const chalk = require('chalk');
const fs = require('fs');

//id,name,address,contact,visit date
// creat,get,update,delete-guest and view
const filePath = "data.json";

//ADD
const addGuest = (name,address,contact,date) => {
    

    const guests = loadGuest();
    let id = 1;
    if(guests.length > 0){
        id = guests[guests.length-1].id+1;
    }

    guests.push({
        id,
        name,
        address,
        contact,
        date
    });

    saveGuest(guests);
    console.log(chalk.green("Data saved!"));
}

//UPDATE
const updateGuest = (id,name,address,contact,date) => {
    const guests = loadGuest();
    const guestIndex =  guests.findIndex((guest) => guest.id === id);
    if(guestIndex != -1){
        const guest = guests[guestIndex];
        // guest.id = id;
        // guest.name = name;
        // guest.address = address;
        // guest.contact = contact;
        // guest.date = date;
        guest.name = name ? name : guest.name;
        guest.address = address ? address : guest.address;
        guest.contact = contact ? contact : guest.contact;
        guest.date = date ? date : guest.date;
        
        saveGuest(guests);
        console.log(chalk.yellow("Update Guest",id) );

        // const n = name ? name : "No Name";
        // const a = address ? address : "No Name";
        // const n = name ? name : "No Name";
        // const n = name ? name : "No Name";

        
    }else{
        console.log(chalk.yellow.inverse("No Record Found"));
    }
    // guests[guestIndex] = {

    // }
    // console.log(guestIndex);
    // if(guest){
    //     console.log(chalk.blue.inverse("update Guest",id));
    //     guest.id = id;
    //     guest.name = name;
    //     guest.address = address;
    //     guest.contact = contact;
    //     guest.date = date;
    //     console.log(guest);
    //     saveGuest(guest);
    // }else{
    //     console.log(chalk.red.inverse("NO RECORD FOUND!"));
    // }
    
}



//DELETE
const deleteGuest = (id) => {
    const guests = loadGuest();
    const newGuest =  guests.filter((guest) => guest.id !== id);
    saveGuest(newGuest);
    console.log(chalk.red.inverse("Delete Guest",id));
}

//READ GUEST

const readGuest = (id) => {
    const guests = loadGuest();
    const guest =  guests.find((guest) => guest.id === id);
    if(guest){
        console.log(chalk.blue("read Guest",id));
        console.log(guest);
    }else{
        console.log(chalk.red.inverse("NO RECORD FOUND!"));
    }
    
}
//LIST ALL
const listGuest = () => {
    const guests = loadGuest();
    guests.forEach(guest => {
        console.log(guest);
    });
    console.log(chalk.green("All listed"));
}

//SAVE DATA
const saveGuest = (guests) => {
    const dataJson =JSON.stringify(guests);
    fs.writeFileSync(filePath,dataJson);

}

//LOAD DATA
const loadGuest = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
    


}

module.exports = {
    addGuest,
    updateGuest,
    deleteGuest,
    readGuest,
    listGuest
}