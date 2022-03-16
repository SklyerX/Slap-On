const consoleTitle = require("console-title");
const input = require("input");
const fs = require("fs");
const gui = require("../lib/gui");
const chalk = require("chalk");


async function createEvent() {
    console.clear();
    consoleTitle("Slap-on | Start Project");
    gui();

    const clientName = await input.text("What is your project folder name: ");
    const eventTypes = await input.select([
        "applicationCommandCreate",
        "applicationCommandDeconste",
        "applicationCommandUpdate",
        "channelCreate",
        "channelDeconste",
        "channelPinsUpdate",
        "channelUpdate",
        "debug",
        "emojiCreate",
        "emojiDeconste",
        "emojiUpdate",
        "error",
        "guildBanAdd",
        "guildBanRemove",
        "guildCreate",
        "guildDeconste",
        "guildIntegrationsUpdate",
        "guildMemberAdd",
        "guildMemberAvailable",
        'guildMemberRemove',
        'guildMembersChunk',
        'guildMemberUpdate',
        'guildUnavailable',
        'guildUpdate',
        'interaction',
        'interactionCreate',
        'invalidated',
        'invalidRequestWarning',
        'inviteCreate',
        'inviteDeconste',
        "message",
        'messageCreate',
        'messageDeconste',
        'messageDeconsteBulk',
        'messageReactionAdd',
        'messageReactionRemove',
        'messageReactionRemoveAll',
        'messageReactionRemoveEmoji',
        'messageUpdate',
        'presenceUpdate',
        'rateLimit',
        'ready',
        'roleCreate',
        'roleDeconste',
        'roleUpdate',
        'shardDisconnect',
        "shardError",
        'shardReady',
        "shardReconnecting",
        'shardResume',
        'stageInstanceCreate',
        'stageInstanceDeconste',
        'stageInstanceUpdate',
        'stickerCreate',
        'stickerDeconste',
        "stickerUpdate",
        "threadCreate",
        "threadDeconste",
        "threadListSync",
        "threadMembersUpdate",
        "threadMemberUpdate",
        "threadUpdate",
        "typingStart",
        'userUpdate',
        "voiceStateUpdate",
        "warn",
        "webhookUpdate",
    ]);

    if(eventTypes === "applicationCommandCreate") {
        const applicationCommandCreateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, applicationCommandCreateJs)
    } else if(eventTypes === "applicationCommandDeconste") {
        const applicationCommandDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, applicationCommandDeconsteJs)
    } else if(eventTypes === "applicationCommandUpdate") {
        const applicationCommandDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, applicationCommandDeconsteJs)
    } else if(eventTypes === "channelCreate") {
        const channelCreateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, channelCreateJs)
    } else if(eventTypes === "channelDeconste") {
        const channelDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, channelDeconsteJs)
    } else if(eventTypes === "channelPinsUpdate") {
        const channelPinsUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, channelPinsUpdate)
    } else if(eventTypes === "channelUpdate") {
        const channelUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, channelUpdateJs)
    } else if(eventTypes === "debug") {
        const debugJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, debugJs)
    } else if(eventTypes === "emojiCreate") {
        const emojiCreateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, emojiCreateJs)
    } else if(eventTypes === "emojiDeconste") {
        const emojiDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, emojiDeconsteJs)
    } else if(eventTypes === "emojiUpdate") {
        const emojiUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, emojiUpdateJs)
    } else if(eventTypes === "error") {
        const errorJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, errorJs)
    } else if(eventTypes === "guildBanAdd") {
        const guildBanAddJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildBanAddJs)
    } else if(eventTypes === "guildBanRemove") {
        const guildBanRemoveJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildBanRemoveJs)
    } else if(eventTypes === "guildDeconste") {
        const guildDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildDeconsteJs)
    } else if(eventTypes === "guildIntegrationsUpdate") {
        const guildIntegrationsUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildIntegrationsUpdateJs)
    } else if(eventTypes === "guildMemberAdd") {
        const guildMemberAddJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildMemberAddJs)
    } else if(eventTypes === "guildMemberAvailable") {
        const guildMemberAvailableJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildMemberAvailableJs)
    } else if(eventTypes === "guildMemberRemove") {
        const guildMemberRemoveJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildMemberRemoveJs)
    } else if(eventTypes === "guildMembersChunk") {
        const guildMembersChunkJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildMembersChunkJs)
    } else if(eventTypes === "guildMemberUpdate") {
        const guildMemberUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildMemberUpdateJs)
    } else if(eventTypes === "guildUnavailable") {
        const guildUnavailableJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildUnavailableJs)
    } else if(eventTypes === "guildUpdate") {
        const guildUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, guildUpdateJs)
    } else if(eventTypes === "interaction") {
        const interactionJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, interactionJs)
    } else if(eventTypes === "interactionCreate") {
        const interactionCreateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, interactionCreateJs)
    } else if(eventTypes === "invalidated") {
        const invalidatedJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, invalidatedJs)
    } else if(eventTypes === "invalidRequestWarning") {
        const invalidRequestWarningJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, invalidRequestWarningJs)
    } else if(eventTypes === "inviteCreate") {
        const inviteCreateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, inviteCreateJs)
    } else if(eventTypes === "inviteDeconste") {
        const inviteDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, inviteDeconsteJs)
    } else if(eventTypes === "message") {
        const messageJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageJs)
    } else if(eventTypes === "messageCreate") {
        const messageCreateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageCreateJs)
    } else if(eventTypes === "messageDeconste") {
        const messageDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageDeconsteJs)
    } else if(eventTypes === "messageDeconsteBulk") {
        const messageDeconsteBulkJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageDeconsteBulkJs)
    } else if(eventTypes === "messageReactionAdd") {
        const messageReactionAddJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageReactionAddJs)
    } else if(eventTypes === "messageReactionRemove") {
        const messageReactionRemoveJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageReactionRemoveJs)
    } else if(eventTypes === "messageReactionRemoveAll") {
        const messageReactionRemoveAllJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageReactionRemoveAllJs)
    } else if(eventTypes === "messageReactionRemoveEmoji") {
        const messageReactionRemoveEmojiJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageReactionRemoveEmojiJs)
    } else if(eventTypes === "messageUpdate") {
        const messageUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, messageUpdateJs)
    } else if(eventTypes === "presenceUpdate") {
        const presenceUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, presenceUpdateJs)
    } else if(eventTypes === "rateLimit") {
        const rateLimitJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, rateLimitJs)
    } else if(eventTypes === "ready") {
        const readyJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, readyJs)
    } else if(eventTypes === "roleCreate") {
        const roleCreateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, roleCreateJs)
    } else if(eventTypes === "roleDeconste") {
        const roleDeconsteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, roleDeconsteJs)
    }  else if(eventTypes === "roleDelete") {
        const roleDeleteJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, roleDeleteJs)
    } else if(eventTypes === "roleUpdate") {
        const roleUpdateJs = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, roleUpdateJs)
    } else if(eventTypes === "shardDisconnect") {
        const shardDisconnect = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, shardDisconnect)
    } else if(eventTypes === "shardError") {
        const shardError = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, shardError)
    } else if(eventTypes === "shardReady") {
        const shardReady = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, shardReady)
    } else if(eventTypes === "shardReconnecting") {
        const shardReconnecting = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, shardReconnecting)
    } else if(eventTypes === "shardResume") {
        const shardResume = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, shardResume)
    } else if(eventTypes === "stageInstanceCreate") {
        const stageInstanceCreate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, stageInstanceCreate)
    } else if(eventTypes === "stageInstanceDeconste") {
        const stageInstanceDeconste = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, stageInstanceDeconste)
    } else if(eventTypes === "stageInstanceUpdate") {
        const stageInstanceUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, stageInstanceUpdate)
    } else if(eventTypes === "stickerCreate") {
        const stickerCreate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, stickerCreate)
    } else if(eventTypes === "stickerDeconste") {
        const stickerDeconste = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, stickerDeconste)
    } else if(eventTypes === "stickerUpdate") {
        const stickerUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, stickerUpdate)
    } else if(eventTypes === "threadCreate") {
        const threadCreate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, threadCreate)
    } else if(eventTypes === "threadDeconste") {
        const threadDeconste = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, threadDeconste)
    } else if(eventTypes === "threadListSync") {
        const threadListSync = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, threadListSync)
    } else if(eventTypes === "threadMembersUpdate") {
        const threadMembersUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, threadMembersUpdate)
    } else if(eventTypes === "threadMemberUpdate") {
        const threadMemberUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, threadMemberUpdate)
    } else if(eventTypes === "threadUpdate") {
        const threadUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, threadUpdate)
    } else if(eventTypes === "typingStart") {
        const typingStart = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, typingStart)
    } else if(eventTypes === "userUpdate") {
        const userUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, userUpdate)
    } else if(eventTypes === "voiceStateUpdate") {
        const voiceStateUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, voiceStateUpdate)
    } else if(eventTypes === "warn") {
        const warn = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, warn)
    } else if(eventTypes === "webhookUpdate") {
        const webhookUpdate = String.raw`const client = require("../app.js");
    
client.on("${eventTypes}", async() => {

})
        `
        fs.writeFileSync(`../${clientName}/events/${eventTypes}.js`, webhookUpdate)
    }

    console.log(chalk.blueBright("Event Successfully created!"))
}

module.exports = createEvent;
