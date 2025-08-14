export type RawScenario = {
    scenarioType: "scenario" | "scenario_outline",
    gherkin: string
    jira: {
        key: string
        summary: string
        labels: string[]
    }
}
