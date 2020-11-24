const fs = require("fs"),
  readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }),
  database = require("@replit/database"),
  db = new database();

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

                    db.set(`${firstName} ${lastName}`).then(value => {
                      firstName,
                      lastName,
                      nickname,
                      mobile,
                      twitterUsername
                    });
                  });
                });
              });
            });
          });
        app();
        break;

        case "list":
          db.list().then(keys => console.log(keys));
        break;

        case "clear":
          db.empty().then(i => console.log("Database cleared!"));
        break;
      };
    }
)};

app();