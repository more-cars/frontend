import {Document, Feature, Scenario, Step, Tag} from "gherkin-ast"
import {format} from "gherkin-formatter"
import type {Scenario as ScenarioData} from "./Types/Scenario.ts"

export function createFeature(scenarioData: ScenarioData) {
    const scenario = new Scenario('Scenario', scenarioData.title, '')
    scenarioData.gherkinSteps.forEach(step => {
        scenario.steps.push(new Step(step, ''))
    })
    scenario.tags.push(new Tag('TEST_' + scenarioData.id))
    scenarioData.tags.forEach(tag => {
        scenario.tags.push(new Tag(tag))
    })

    const feature = new Feature("Feature", "Dummy", "")
    feature.elements.push(scenario)

    const document: Document = new Document('doc')
    document.feature = feature

    let formattedFeature = format(document)
    formattedFeature += "\n"

    return formattedFeature
}
