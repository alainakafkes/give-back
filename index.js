#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const program = require('commander');
const validUrl = require('valid-url');

program
  .arguments('add <donateLink>')
  .description('Add a link to project donation page')
  .action(function(cmdArg, objArg) {
    var linkArg = objArg.rawArgs[objArg.rawArgs.length-1]
    const cwd = process.cwd();
    if (validUrl.isUri(linkArg)) {
      fs.writeFile(path.join(cwd, '/DONATE.txt'), linkArg, 'utf8', function(error) {
        if (error) return console.log(error);
      });
    }
    console.log("Created DONATE.txt.");
  })
  .parse(process.argv);
