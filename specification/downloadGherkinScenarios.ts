import {fetchRawScenariosFromXray} from "./lib/fetchRawScenariosFromXray"
import {extractRawXrayScenarios} from "./lib/extractRawXrayScenarios"
import {createFeature} from "./lib/createFeature"
import {saveFeatureFile} from "./lib/saveFeatureFile"

async function downloadGherkinScenarios() {
    const rawScenarios = await fetchRawScenariosFromXray()
    const scenarios = extractRawXrayScenarios(rawScenarios.getTests.results)
    scenarios.forEach(scenario => {
        saveFeatureFile(
            createFeature(scenario),
            scenario.id + ' » ' + scenario.title + '.feature'
        )
    })
}

downloadGherkinScenarios().then(() => true)
