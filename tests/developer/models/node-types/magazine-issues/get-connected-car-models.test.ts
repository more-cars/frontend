import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedCarModels} from "../../../../../src/models/node-types/magazine-issues/findConnectedCarModels"
import {MagazineIssueCoversCarModelRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueCoversCarModelRelationship"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"

describe('Collect connected CAR MODELS for the MAGAZINE ISSUE detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([])

        expect(await findConnectedCarModels(12345678))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeCarModel.data} as unknown as MagazineIssueCoversCarModelRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeCarModel.data} as unknown as MagazineIssueCoversCarModelRelationship,
        ])

        expect(await findConnectedCarModels(12345678))
            .toHaveLength(2)
    })
})
