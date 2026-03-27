import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getMagazineIssueById} from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiMagazineIssueNode} from "../../../../../src/data/node-types/magazine-issues/types/ApiMagazineIssueNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {MagazineIssueNode} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueNode"

describe('Fetching MAGAZINE ISSUE node from data source', () => {
    test('when there is no MAGAZINE ISSUE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMagazineIssueById(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE', async () => {
        const apiResponse = {
            type: ApiNodeType.MAGAZINE_ISSUE,
            id: 12345678,
            attributes: {
                title: "dummy",
            },
        } as ApiMagazineIssueNode

        const expectedDataNode = {
            type: DataNodeType.MAGAZINE_ISSUE,
            data: {
                id: 12345678,
                title: "dummy",
            },
        } as MagazineIssueNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMagazineIssueById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
