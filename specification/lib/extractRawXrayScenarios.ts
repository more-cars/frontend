import type {RawScenario} from "./Types/RawScenario.ts"
import type {Scenario} from "./Types/Scenario.ts"

export function extractRawXrayScenarios(scenarios: Array<RawScenario>): Array<Scenario> {
    const extractedScenarios: Array<Scenario> = []
    scenarios.forEach(scenario => {
        extractedScenarios.push({
            id: scenario.jira.key,
            title: scenario.jira.summary,
            rule_id: scenario.jira.issuelinks[0].outwardIssue.key,
            rule_title: scenario.jira.issuelinks[0].outwardIssue.fields.summary,
            type: scenario.scenarioType,
            gherkinSteps: scenario.gherkin.split('\n'),
            tags: scenario.jira.labels,
        })
    })

    return extractedScenarios
}
