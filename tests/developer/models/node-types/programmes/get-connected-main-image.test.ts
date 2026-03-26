import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/programmes/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {ProgrammeHasMainImageRelationship} from "../../../../../src/data/node-types/programmes/types/ProgrammeHasMainImageRelationship"

describe('Collect connected main IMAGE for the PROGRAMME detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as ProgrammeHasMainImageRelationship

        vi.spyOn(ProgrammeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
