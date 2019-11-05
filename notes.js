const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return ' Your notes ';
};


//Adding notes

const addNote = (title,body) => {
    const notes = loadNotes();
    const singularDup = notes.find(note => note.title === title);

    debugger;

    if(!singularDup){
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.bgGreen('Added a new note'));
        
    } else {
        console.log(chalk.bgRed('Note title already exist'));
    }
    
};

//Removing notes

const removeNote = title => {
    const notes = loadNotes();
    const removeNote = notes.filter(note => note.title !== title);

    if(notes.length !== removeNote.length){
        console.log(chalk.bgGreen('Note removed'));
        saveNotes(removeNote);
    } else{
        console.log(chalk.bgRed('Note note found'));
    }
    
};

// Creating list of notes

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(note => console.log(chalk.green.inverse(note.title)))
};


// Read notes


const readNotes= (title) => {
    const notes = loadNotes();
    const findNotes = notes.find(note => {
        if(note.title === title){
            console.log(chalk.inverse(note.title));
            console.log(note.body);
        } else {
            console.log(chalk.bgRed('error!! no note found'))
        }
    })
};



// Save note method
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};




// Load note moethod, containing all the notes
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error){
        return [];
    }
   
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNotes : readNotes,
};