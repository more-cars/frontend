import type {RawIssueLink} from "./RawIssueLink.ts"

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
