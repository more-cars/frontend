import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/motor-shows/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {MotorShowHasMainImageRelationship} from "../../../../../src/data/node-types/motor-shows/types/MotorShowHasMainImageRelationship"

describe('Collect connected main IMAGE for the MOTOR SHOW detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as MotorShowHasMainImageRelationship

        vi.spyOn(MotorShowDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
