// requiring / importing the needed packages
const ReadLine = require("readline").createInterface({ // for the user input
  input: process.stdin,
  output: process.stdout
})
const chalk = require('chalk'); // for the text color
const got = require('got'); // for the request info

// clears console to make it neat
console.clear();

// prints the Email Rep text in bright blue via chalk package
console.log(chalk.blueBright(`============================================================================
=                                                                          =
=    ███████╗███╗   ███╗ █████╗ ██╗██╗         ██████╗ ███████╗██████╗     =
=    ██╔════╝████╗ ████║██╔══██╗██║██║         ██╔══██╗██╔════╝██╔══██╗    =
=    █████╗  ██╔████╔██║███████║██║██║         ██████╔╝█████╗  ██████╔╝    =
=    ██╔══╝  ██║╚██╔╝██║██╔══██║██║██║         ██╔══██╗██╔══╝  ██╔═══╝     =
=    ███████╗██║ ╚═╝ ██║██║  ██║██║███████╗    ██║  ██║███████╗██║         =
=    ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚═╝         =
=                                                                          =
============================================================================\n\n`))

// Main function where the main code lies
async function Main() {
  // user input for email
  ReadLine.question("Email: ", async EM => {
    (async () => {
      try {
        // variable for the repsonse for later on
        const response = await got(`https://emailrep.io/${EM}?summary=${EM}`); // this is the source of where the email rep info comes from
        // the ${EM} is just using the variable name for the Email input question 
        console.log(response.body); // prints the variable above "response"
        //=> '<!doctype html> ...' // from got npm package
      } catch (error) {
        console.log(error.response.body); // from npm got package too
        //=> 'Internal server error ...'
      }
    })();
  })
}

// run the Main code in the Main() function above
Main().catch(error => { // this .catch and below the catch errors and console.log (print) them
  console.error(error)
})
