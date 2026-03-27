import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {getConnectedMagazine} from "../../../../../src/data/node-types/magazine-issues/getConnectedMagazine"

describe('Fetching connected MAGAZINE from data source', () => {
    test('when there is no MAGAZINE connected', async () => {
        const source = FakeMagazineIssue.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMagazine(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE connected', async () => {
        const source = FakeMagazineIssue.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMagazine(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => null)

        expect(await getConnectedMagazine(12345678))
            .toEqual(null)
    })
})
