import {expect, test, vi} from "vitest"
import {obtainXrayApiToken} from "../../../specification/lib/obtainXrayApiToken.ts"

test('Xray - Fetching API token with invalid credentials', async () => {
    vi.stubEnv('XRAY_API_CLIENT_ID', 'test')
    vi.stubEnv('XRAY_API_CLIENT_SECRET', 'test')

    const apiToken = await obtainXrayApiToken()

    vi.unstubAllEnvs()

    expect(apiToken)
        .toBe(false)
})

test('Xray - Fetching API token with valid credentials', async () => {
    vi.stubEnv('XRAY_API_CLIENT_ID', process.env.XRAY_API_CLIENT_ID)
    vi.stubEnv('XRAY_API_CLIENT_SECRET', process.env.XRAY_API_CLIENT_SECRET)

    const apiToken = await obtainXrayApiToken()

    vi.unstubAllEnvs()

    expect(apiToken)
        .toHaveLength(448)
})
