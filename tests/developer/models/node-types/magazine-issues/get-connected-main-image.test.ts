import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/magazine-issues/findConnectedMainImage"
import {MagazineIssueHasMainImageRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueHasMainImageRelationship"

describe('Collect connected main IMAGE for the MAGAZINE ISSUE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as MagazineIssueHasMainImageRelationship
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
