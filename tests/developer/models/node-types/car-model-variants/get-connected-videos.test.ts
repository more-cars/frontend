import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/car-model-variants/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {CarModelVariantHasVideoRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantHasVideoRelationship"

describe('Collect connected VIDEOS for the CAR MODEL VARIANT detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as CarModelVariantHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as CarModelVariantHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
