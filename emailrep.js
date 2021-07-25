const ReadLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})
const chalk = require('chalk');
const got = require('got');

console.clear();
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

async function Main() {
  ReadLine.question("Email: ", async EM => {
    (async () => {
      try {
        const response = await got(`https://emailrep.io/${EM}?summary=${EM}`);
        console.log(response.body);
        //=> '<!doctype html> ...'
      } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
      }
    })();
  })
}
Main().catch(error => {
  console.error(error)
})