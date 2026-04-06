import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/racing-events/getRacingEventById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {getConnectedMagazineIssues} from "../../../../../src/data/node-types/racing-events/getConnectedMagazineIssues"

describe('Fetching connected MAGAZINE ISSUES from data source', () => {
    test('when there are no MAGAZINE ISSUES connected', async () => {
        const source = FakeRacingEvent.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple MAGAZINE ISSUES connected', async () => {
        const source = FakeRacingEvent.data
        const target = {node_type: ApiNodeType.MAGAZINE_ISSUE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMagazineIssues(12345678))
            .toHaveLength(3)
    })

    test('when the RACING EVENT does not exist', async () => {
        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => null)

        expect(await getConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })
})
