import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedCarModels} from "../../../../../src/models/node-types/magazine-issues/findConnectedCarModels"
import {MagazineIssueCoversCarModelRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueCoversCarModelRelationship"

describe('Collect connected CAR MODELS for the MAGAZINE ISSUE detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([])

        expect(await findConnectedCarModels(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as MagazineIssueCoversCarModelRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as MagazineIssueCoversCarModelRelationship,
        ])

        expect(await findConnectedCarModels(1))
            .toHaveLength(2)
    })
})
