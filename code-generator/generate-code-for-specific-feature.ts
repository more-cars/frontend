import {select} from "@inquirer/prompts"
import inquirer from 'inquirer'
import {convertToCliParameters} from "./lib/convertToCliParameters"
import {spawnShellCommand} from "./lib/spawnShellCommand"
import {dasherize} from "inflection"

generateCodeForSpecificFeature().then(() => true)

async function generateCodeForSpecificFeature() {
    const feature = await promptFeature()
    const featureParameters = await promptFeatureParameters(feature)
    const nodeTypeProperties = getNodeTypeProperties(featureParameters['nodeType'])
    const cliParameters = convertToCliParameters(featureParameters)

    const hygenCommand = `HYGEN_OVERWRITE=1 HYGEN_TMPLS='${__dirname}' hygen features ${feature} ${cliParameters} --props='${JSON.stringify(nodeTypeProperties)}'`
    console.log(hygenCommand)
    await spawnShellCommand(hygenCommand)
}

async function promptFeature() {
    const choices = []
    choices.push({value: 'node-overview-page'})

    return select({
        message: 'Generating code for which feature?',
        choices,
    })
}

async function promptFeatureParameters(feature: string) {
    const questions = require(`${__dirname}/features/${feature}/prompt.js`)

    return inquirer.prompt(questions)
}

function getNodeTypeProperties(nodeType: string) {
    return require(`./node-type-properties/${dasherize(nodeType.toLowerCase())}-properties.json`)
}
