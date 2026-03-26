import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/programme-episodes/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {ProgrammeEpisodeHasMainImageRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeHasMainImageRelationship"

describe('Collect connected main IMAGE for the PROGRAMME EPISODE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as ProgrammeEpisodeHasMainImageRelationship

        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
