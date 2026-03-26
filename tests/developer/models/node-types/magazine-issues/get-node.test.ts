import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/magazine-issues/findNodeById"
import type {MagazineIssueNode} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the MAGAZINE ISSUE detail page', () => {
    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the MAGAZINE ISSUE exists', async () => {
        const node = {type: DataNodeType.MAGAZINE_ISSUE, data: {id: 11111118, title: "dummy 1"}} as MagazineIssueNode
        vi.spyOn(MagazineIssueDataFacade, 'getNodeById').mockResolvedValue(node)

        const magazineIssue = await findNodeById(11111118)

        expect(magazineIssue?.fields.id).toEqual(node.data.id)
        expect(magazineIssue?.fields.title).toEqual(node.data.title)
    })
})
