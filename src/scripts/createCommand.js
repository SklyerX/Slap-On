const consoleTitle = require("console-title");
const input = require("input");
const fs = require("fs");
const gui = require("../lib/gui");
const chalk = require("chalk");


async function createCommand() {
    console.clear();
    consoleTitle("Slap-on | Start Project");
    gui();

    const clientName = await input.text("What is your project folder name: ");
    const clientCommand = await input.text("name of the command: ");
    const clientCommandDesc = await input.text("Enter the commands description: ");

    let getBaseStrutcture = String.raw`const { SlashCommandBuilder } = require("@discordjs/builders");
    
module.exports = {
    data: new SlashCommandBuilder()
            .setName('${clientCommand}')
            .setDescription('${clientCommandDesc}'),
        async execute(interaction) {
            interaction.reply('${clientCommand} work')
    }
}
`

    fs.writeFileSync(`../${clientName}/commands/${clientCommand}.js`, getBaseStrutcture);

    console.log(chalk.blueBright("Command Successfully created"))
}

module.exports = createCommand;
