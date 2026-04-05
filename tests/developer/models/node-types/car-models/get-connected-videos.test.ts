import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/car-models/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {CarModelHasVideoRelationship} from "../../../../../src/data/node-types/car-models/types/CarModelHasVideoRelationship"

describe('Collect connected VIDEOS for the CAR MODEL detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as CarModelHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as CarModelHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
