const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// yargs version
yargs.version('1.1.0');

// add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title: {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption : true,
            type: 'string',
        }

    },

    handler : function(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//remove command

yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption : true,
            type : 'string',
        }

    },
    handler : function(argv){
        notes.removeNote(argv.title);
    },

});


//list command

yargs.command({
    command : 'list',
    describe : 'List note',
   

    handler : function(){
        notes.listNotes();
    }
});

// read coomand
yargs.command({
    command: 'read',
    describe : 'Read note',
    builder : {
        title :{
            describe: 'Read note',
            demandOption : true,
            type : 'string',
        }
        
    },

    handler : function(argv){
        notes.readNotes(argv.title)
    }
});

yargs.parse();
