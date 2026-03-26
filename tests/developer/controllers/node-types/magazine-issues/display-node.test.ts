import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {MagazineIssueModelFacade} from "../../../../../src/models/MagazineIssueModelFacade"
import * as node from "../../../../../src/controllers/node-types/magazine-issues/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a MAGAZINE ISSUE detail page', () => {
    test('when the MAGAZINE ISSUE does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/magazine-issue-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the MAGAZINE ISSUE exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeMagazineIssue.model))
        vi.spyOn(MagazineIssueModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeMagazineIssue.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/magazine-issue-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
