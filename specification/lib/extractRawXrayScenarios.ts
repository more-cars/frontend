import type {RawScenario} from "./Types/RawScenario.ts"
import type {Scenario} from "./Types/Scenario.ts"

export function extractRawXrayScenarios(scenarios: Array<RawScenario>): Array<Scenario> {
    const extractedScenarios: Array<Scenario> = []
    scenarios.forEach(scenario => {
        extractedScenarios.push({
            id: scenario.jira.key,
            title: scenario.jira.summary,
            type: scenario.scenarioType,
            gherkinSteps: scenario.gherkin.split('\n'),
            tags: scenario.jira.labels,
        })
    })

    return extractedScenarios
}
