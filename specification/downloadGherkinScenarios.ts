import {fetchRawScenariosFromXray} from "./lib/fetchRawScenariosFromXray.ts"
import {extractRawXrayScenarios} from "./lib/extractRawXrayScenarios.ts"
import {createFeature} from "./lib/createFeature.ts"
import {saveFeatureFile} from "./lib/saveFeatureFile.ts"

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

downloadGherkinScenarios().then(r => true)
