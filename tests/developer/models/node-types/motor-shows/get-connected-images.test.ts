import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/motor-shows/findConnectedImages"
import {MotorShowHasImageRelationship} from "../../../../../src/data/node-types/motor-shows/types/MotorShowHasImageRelationship"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"

describe('Collect connected IMAGES for the MOTOR SHOW detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeImage.data} as unknown as MotorShowHasImageRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeImage.data} as unknown as MotorShowHasImageRelationship,
        ])

        expect(await findConnectedImages(12345678))
            .toHaveLength(2)
    })
})
