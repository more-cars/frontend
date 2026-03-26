import {afterEach, describe, expect, test, vi} from "vitest"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import * as node from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {getConnectedPredecessor} from "../../../../../src/data/node-types/magazine-issues/getConnectedPredecessor"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected PREDECESSOR from data source', () => {
    test('when there is no PREDECESSOR connected', async () => {
        const source = FakeMagazineIssue.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedPredecessor(12345678))
            .toEqual(null)
    })

    test('when there is a PREDECESSOR connected', async () => {
        const source = FakeMagazineIssue.data
        const target = {node_type: ApiNodeType.MAGAZINE_ISSUE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedPredecessor(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the PREDECESSOR does not exist', async () => {
        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => null)

        expect(await getConnectedPredecessor(12345678))
            .toEqual(null)
    })
})
