import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/motor-shows/findConnectedImages"
import {MotorShowHasImageRelationship} from "../../../../../src/data/node-types/motor-shows/types/MotorShowHasImageRelationship"

describe('Collect connected IMAGES for the MOTOR SHOW detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as MotorShowHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as MotorShowHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
