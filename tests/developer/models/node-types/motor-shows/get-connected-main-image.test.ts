import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/motor-shows/findConnectedMainImage"
import {MotorShowHasMainImageRelationship} from "../../../../../src/data/node-types/motor-shows/types/MotorShowHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the MOTOR SHOW detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as MotorShowHasMainImageRelationship
        vi.spyOn(MotorShowDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
