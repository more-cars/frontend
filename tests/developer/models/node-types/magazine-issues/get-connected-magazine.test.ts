import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedMagazine} from "../../../../../src/models/node-types/magazine-issues/findConnectedMagazine"
import {MagazineIssueBelongsToMagazineRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueBelongsToMagazineRelationship"

describe('Collect connected MAGAZINE for the MAGAZINE ISSUE detail page', () => {
    test('when no MAGAZINE is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMagazineNode').mockResolvedValue(null)

        expect(await findConnectedMagazine(1))
            .toEqual(null)
    })

    test('when there is a MAGAZINE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as MagazineIssueBelongsToMagazineRelationship
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMagazineNode').mockResolvedValue(data)

        expect(await findConnectedMagazine(1))
            .toHaveProperty('id', 1)
    })
})
