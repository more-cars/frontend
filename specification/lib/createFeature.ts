import {Document, Feature, Scenario, ScenarioOutline, Step, Tag} from "gherkin-ast"
import {format} from "gherkin-formatter"
import type {Scenario as ScenarioData} from "./Types/Scenario.ts"

export function createFeature(scenarioData: ScenarioData) {
    let scenario: Scenario | ScenarioOutline
    if (scenarioData.type === 'scenario_outline') {
        scenario = new ScenarioOutline('Scenario Outline', scenarioData.title, '')
    } else {
        scenario = new Scenario('Scenario', scenarioData.title, '')
    }

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

    return format(document)
}
