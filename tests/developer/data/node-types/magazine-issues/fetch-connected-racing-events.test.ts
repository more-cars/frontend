import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {getConnectedRacingEvents} from "../../../../../src/data/node-types/magazine-issues/getConnectedRacingEvents"

describe('Fetching connected RACING EVENTS from data source', () => {
    test('when there are no RACING EVENTS connected', async () => {
        const source = FakeMagazineIssue.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple RACING EVENTS connected', async () => {
        const source = FakeMagazineIssue.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRacingEvents(12345678))
            .toHaveLength(3)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => null)

        expect(await getConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })
})
