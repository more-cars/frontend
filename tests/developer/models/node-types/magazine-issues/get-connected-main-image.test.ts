import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/magazine-issues/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {MagazineIssueHasMainImageRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueHasMainImageRelationship"

describe('Collect connected main IMAGE for the MAGAZINE ISSUE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as MagazineIssueHasMainImageRelationship

        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
