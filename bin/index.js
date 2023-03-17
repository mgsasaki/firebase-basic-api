#! /usr/bin/env node

require = require('esm')(module /*, options*/);
generateCustomToken = require('../server').generateCustomToken;
//import { generateCustomToken } from '../server.mjs';

const yargs = require("yargs");

const options = yargs
  .scriptName("firebase-cli")
  .usage('$0 <cmd> [args]')
  .command('generate-token [uid]', 'generate a custom token for a specific user', (yargs) => {
    yargs.positional('uid', {
      type: 'string',
      describe: 'uid of the user to generate custom token to',
    })
  }, function (argv) {
    console.log('The UID is', argv.uid);
    generateCustomToken(argv.uid);
  })
  .command('list-users', 'list the first 1000 users on the firebase project', (yargs) => {
  }, function (argv) {
    console.log('Will List Users!');
  })
  .help()
  .argv;
