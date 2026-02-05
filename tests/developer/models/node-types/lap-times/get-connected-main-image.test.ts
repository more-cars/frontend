import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/lap-times/findConnectedMainImage"
import {LapTimeHasMainImageRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeHasMainImageRelationship"

describe('Collect connected main IMAGE for the LAP TIME detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as LapTimeHasMainImageRelationship
        vi.spyOn(LapTimeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
