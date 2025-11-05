import fs from "node:fs"
import inquirer from 'inquirer'
import {select} from "@inquirer/prompts"
import {createTickets} from "./lib/createTickets"
import {convertToCliParameters} from "./lib/convertToCliParameters"
import {spawnShellCommand} from "./lib/spawnShellCommand"

prepareAndCreateTickets().then(() => true)

async function prepareAndCreateTickets() {
    const ticketTreePath = __dirname + '/_temp/ticketTree.json'
    if (fs.existsSync(ticketTreePath)) {
        fs.rmSync(ticketTreePath)
    }

    const feature = await promptFeature()
    const featureParameters = await promptFeatureParameters(feature)
    const cliParameters = convertToCliParameters(featureParameters)

    const hygenCommand = `HYGEN_OVERWRITE=1 HYGEN_TMPLS='${__dirname}' hygen features ${feature} ${cliParameters}`
    await spawnShellCommand(hygenCommand)

    const data = JSON.parse(fs.readFileSync(ticketTreePath, 'utf8'))
    const createdTickets = await createTickets(data)
    console.log('Tickets created:', createdTickets)
}

async function promptFeature() {
    const choices = [
        {value: 'get-all-nodes'},
        {value: 'get-node-by-id'},
        {value: 'get-all-relationships'},
        {value: 'get-sole-relationship'},
    ]

    return select({
        message: 'Generating tickets for which feature?',
        choices,
    })
}

async function promptFeatureParameters(feature: string) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const questions = require(`${__dirname}/features/${feature}/prompt.js`)

    return inquirer.prompt(questions)
}
