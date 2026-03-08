import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/magazine-issues/findAllNodes"
import type {MagazineIssueNode} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueNode"

describe('Collect node collection for the MAGAZINE ISSUE overview page', () => {
    test('when there exist no MAGAZINE ISSUES', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple MAGAZINE ISSUES', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, title: "dummy 1"} as MagazineIssueNode,
            {id: 2, title: "dummy 2"} as MagazineIssueNode,
            {id: 3, title: "dummy 3"} as MagazineIssueNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 MAGAZINE ISSUES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, title: "dummy " + i} as MagazineIssueNode)
        }

        vi.spyOn(MagazineIssueDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
