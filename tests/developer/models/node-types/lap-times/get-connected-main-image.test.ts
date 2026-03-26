import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/lap-times/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {LapTimeHasMainImageRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeHasMainImageRelationship"

describe('Collect connected main IMAGE for the LAP TIME detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as LapTimeHasMainImageRelationship

        vi.spyOn(LapTimeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
