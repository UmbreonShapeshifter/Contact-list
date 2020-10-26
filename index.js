const fs = require("fs"),
  readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }),
  contactData = "./contactData/";

const app = () => {
  console.log(`Welcome to the CLI contact list!`);

  rl.question(
`
What would you like to do today?
===
For a list of commands: type "Help"
`,

    (response) => {
      response = response.split(` `);

      switch (response[0].toLowerCase()) {

        case "help":
          console.log("Create: adds a new contact");
          app();
        break;

        case "create":
          rl.question("First Name: ", firstName => {
            rl.question("Last Name: ", lastName => {
              rl.question("Nickname (or Username): ", nickname => {
                rl.question("Mobile: ", mobile => {
                  rl.question("Twitter Username: ", twitterUsername => {

                    fs.writeFile(`${contactData}${firstName}_${lastName}_Data.json`, JSON.stringify({
                      firstName,
                      lastName,
                      nickname,
                      mobile,
                      twitterUsername
                    }),
                      function(err) {
                        if (err) throw err;
                        console.log('Contact creation complete!');
                      }
                    );
                  });
                });
              });
            });
          });
          app();
          break;

          case "view":
            const contactDataSimplifed = contactData.forEach(element => {
                let arr = [];

                for(let i = 0; i < element.length; i++) {
                  if(element[i] == "_Data.json") {
                    
                  }
                }
              });
            console.log(() => {
              fs.readdirSync(contactDataSimplifed)
            });
          break;

        default:
          console.log("Invaild input!");
      }
    })
}

app();