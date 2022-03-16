const consoleTitle = require("console-title");
const input = require("input");
const fs = require("fs");
const gui = require("../lib/gui");
const chalk = require("chalk");

async function startProject() {
    console.clear();
    consoleTitle("Slap-on | Start Project");
    gui();

    const clientName = await input.text("Enter the name of you're project: ");
    const clientToken = await input.password("Bot Token: ");
    const clientId = await input.text("Client Id: ");
    const clientGuild = await input.text("Test Guild Id: ");
    const clientInfo = await input.text("Developer Id: ");
    const clientSlash = await input.text("Would like to register the slash commands to all guilds (yes/no): ");

    // File Information
    let configJson = String.raw`
    {
        "token": "${clientToken}",
        "clientId": "${clientId}",
        "guildId": "${clientGuild}",
        "developers": ["${clientInfo}"],
        "registerSlash": "${clientSlash}"
    }
    `

    let getMainFile = String.raw`const { Client, Collection } = require("discord.js");
const { REST } = require("@discord/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const client = new Client({
    intents: 32765 // All intents
})

module.exports = client;

const config = require("./slap-on.json");

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

for(const file of commandFiles) {
    const command = require('./commands/' + file);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

client.commands = new Collection();

client.on("ready", () => {
    console.log("Logged in as: " + client.user.tag);

    const CLIENT_ID = config.clientId;
    const GUILD_ID = config.guildId;

    const rest = new REST({
        version: "9",
    }).setToken(config.token);

    (async () => {
        try {
            if(config.registerSlash === "yes") {
                await rest.put(Routes.applicationCommand(CLIENT_ID), {
                    body: commands
                });
                console.log("Successfully registered / commands globally");
            } else {
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
                    body: commands
                });
                console.log("Successfully registered / commands locally");
            }    
        } catch (err) {
            if (err) console.error(err);
        }
    })();
})

client.login(config.token).catch(() => {
    console.log("Invalid Token has been provided please provide a valid token");
});
`

    let getTestCommand = String.raw`
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("test if the bot works or not!"),
    async execute(interaction) {
        interaction.reply("test command works")
    }
}
`

    let getInteractionCreate = String.raw`const client = require("../app.js");

client.on("interactionCreate", async(interaction) => {
    if(!interaction.isCommand()) return;
    
    const command = client.commands.get(interaction.commandName);
    
    if(!command) return;
    
    try {
        await command.execute(interaction);
    } catch (err) {
        if(err) console.error(err);
        await interaction.reply({ content: "An error occured while running executing this command.", ephemeral: true });
    }
})
    `

            // Folder Creation
            fs.mkdirSync(`../${clientName}`, 0o776);
            fs.mkdirSync(`../${clientName}/commands`, 0o776);
            fs.mkdirSync(`../${clientName}/events`, 0o776);
            // Config File
            fs.writeFileSync(`../${clientName}/slap-on.json`, configJson)
            // Appjs File
            fs.writeFileSync(`../${clientName}/app.js`, getMainFile)
            // Writing the handler file
            fs.writeFileSync(`../${clientName}/commands/test.js`, getTestCommand);
            // Writing the event folder
            fs.writeFileSync(`../${clientName}/events/interactionCreate.js`, getInteractionCreate);

            console.log(chalk.blueBright(`Successfully created bot folder you can now navigate to it and start you're robot!`))

}

module.exports = startProject;
