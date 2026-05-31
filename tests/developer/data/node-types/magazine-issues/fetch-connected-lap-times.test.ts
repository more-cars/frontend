import {describe, expect, test, vi} from "vitest"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import * as node from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedLapTimes} from "../../../../../src/data/node-types/magazine-issues/getConnectedLapTimes"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected LAP TIMES from data source', () => {
    test('when there are no LAP TIMES connected', async () => {
        const source = FakeMagazineIssue.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedLapTimes(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple LAP TIMES connected', async () => {
        const source = FakeMagazineIssue.data
        const target = {node_type: ApiNodeType.LAP_TIME}

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

        expect(await getConnectedLapTimes(12345678))
            .toHaveLength(3)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => null)

        expect(await getConnectedLapTimes(12345678))
            .toHaveLength(0)
    })
})
