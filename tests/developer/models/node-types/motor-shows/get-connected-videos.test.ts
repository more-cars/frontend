import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/motor-shows/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {MotorShowHasVideoRelationship} from "../../../../../src/data/node-types/motor-shows/types/MotorShowHasVideoRelationship"

describe('Collect connected VIDEOS for the MOTOR SHOW detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as MotorShowHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as MotorShowHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
