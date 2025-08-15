import {expect, test, vi} from "vitest"
import {obtainJiraApiToken} from "../../../specification/lib/obtainJiraApiToken.ts"

test('Jira - Fetching API token with missing username', () => {
    vi.stubEnv('JIRA_API_USERNAME', undefined)
    vi.stubEnv('JIRA_API_TOKEN', 'test')

    const apiToken = obtainJiraApiToken()

    vi.unstubAllEnvs()

    expect(apiToken)
        .toBe(false)
})

test('Jira - Fetching API token with missing api token', () => {
    vi.stubEnv('JIRA_API_USERNAME', 'test')
    vi.stubEnv('JIRA_API_TOKEN', undefined)

    const apiToken = obtainJiraApiToken()

    vi.unstubAllEnvs()

    expect(apiToken)
        .toBe(false)
})

test('Jira - Fetching API token with all credentials missing', () => {
    vi.stubEnv('JIRA_API_USERNAME', undefined)
    vi.stubEnv('JIRA_API_TOKEN', undefined)

    const apiToken = obtainJiraApiToken()

    vi.unstubAllEnvs()

    expect(apiToken)
        .toBe(false)
})

test('Jira - Fetching API token with provided credentials', () => {
    vi.stubEnv('JIRA_API_USERNAME', 'test')
    vi.stubEnv('JIRA_API_TOKEN', 'test')

    const apiToken = obtainJiraApiToken()

    vi.unstubAllEnvs()

    expect(apiToken)
        .toBe('dGVzdDp0ZXN0')
})
