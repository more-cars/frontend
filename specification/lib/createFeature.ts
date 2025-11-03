import {Document, Feature, Rule, Scenario, ScenarioOutline, Step, Tag} from "gherkin-ast"
import {format} from "gherkin-formatter"
import type {Scenario as ScenarioData} from "./Types/Scenario"

export function createFeature(scenarioData: ScenarioData) {
    const feature = new Feature('Feature', 'Dummy', '')

    const rule = new Rule('Rule', scenarioData.rule_title, '')
    rule.tags.push(new Tag('RULE_' + scenarioData.rule_id))
    feature.elements.push(rule)

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
    feature.elements.push(scenario)

    const document: Document = new Document('doc')
    document.feature = feature

    return format(document)
}
