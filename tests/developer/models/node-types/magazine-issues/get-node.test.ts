import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/magazine-issues/findNodeById"
import type {MagazineIssueNode} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueNode"

describe('Collect node for the MAGAZINE ISSUE detail page', () => {
    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the MAGAZINE ISSUE exists', async () => {
        const node = {id: 1, title: "dummy 1"} as MagazineIssueNode
        vi.spyOn(MagazineIssueDataFacade, 'getNodeById').mockResolvedValue(node)

        const magazineIssue = await findNodeById(1)

        expect(magazineIssue?.id).toEqual(node.id)
        expect(magazineIssue?.title).toEqual(node.title)
    })
})
