import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/magazine-issues/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/magazine-issues/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {MagazineIssue} from "../../../../src/models/node-types/magazine-issues/types/MagazineIssue"

describe('Magazine Issues', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/magazine-issues')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.MAGAZINE_ISSUE,
                fields: {},
            } as MagazineIssue))

        await supertestGet('/magazine-issue-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
