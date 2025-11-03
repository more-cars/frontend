import type {RawIssueLink} from "./RawIssueLink"

export type RawScenario = {
    scenarioType: "scenario" | "scenario_outline",
    gherkin: string
    jira: {
        key: string
        summary: string
        issuelinks: RawIssueLink[]
        labels: string[]
    }
}
