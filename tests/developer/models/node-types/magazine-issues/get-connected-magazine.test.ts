import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedMagazine} from "../../../../../src/models/node-types/magazine-issues/findConnectedMagazine"
import {FakeMagazine} from "../../../../_toolbox/fixtures/node-types/FakeMagazine"
import {MagazineIssueBelongsToMagazineRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueBelongsToMagazineRelationship"

describe('Collect connected MAGAZINE for the MAGAZINE ISSUE detail page', () => {
    test('when no MAGAZINE is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMagazineNode').mockResolvedValue(null)

        expect(await findConnectedMagazine(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeMagazine.data} as unknown as MagazineIssueBelongsToMagazineRelationship

        vi.spyOn(MagazineIssueDataFacade, 'getConnectedMagazineNode').mockResolvedValue(data)

        expect(await findConnectedMagazine(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
