// Required Modules
const consoleTitle = require("console-title");
const input = require("input");
const chalk = require("chalk");

// Our Modules
const gui = require("./lib/gui");
const startProject = require("./scripts/startProject");
const createCommand = require("./scripts/createCommand");
const createEvent = require("./scripts/createEvent");

// Application
console.log(`${chalk.yellow("[")}${chalk.blueBright("#")}${chalk.yellow("]")} Loading..`)

async function main() {
    console.clear();

    consoleTitle("Slap On - Home")
    gui()


    console.log(`
                                        ${chalk.yellow("[")}${chalk.blue("+")}${chalk.yellow("]")} Options:
                                        
                                                    ${chalk.yellow("[")}01${chalk.yellow("]")} Create Project\n
                                                    ${chalk.yellow("[")}02${chalk.yellow("]")} Create Command\n
                                                    ${chalk.yellow("[")}03${chalk.yellow("]")} Create Event
                                                       
                                                                                        ${chalk.yellow("[")}*${chalk.yellow("]")} Exit Tool
                                        `)

    const question = await input.text(`[${chalk.blueBright("#")}] Choice: `)

    console.clear();
    gui();

    if (question === "1") {
        startProject();
    } else if (question === "2") {
        createCommand();
    } else if (question === "3") {
        createEvent();
    } else if (question === "*") {
        console.log("Exiting Tool..")
        process.exit();
    } else {
        console.log("Invalid option... Trying again 2 seconds");
        setTimeout(() => {
            main()
        }, 2000)
    }
}

module.exports = main;

main();