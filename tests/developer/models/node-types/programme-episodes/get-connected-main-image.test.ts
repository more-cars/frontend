import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/programme-episodes/findConnectedMainImage"
import {ProgrammeEpisodeHasMainImageRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the PROGRAMME EPISODE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as ProgrammeEpisodeHasMainImageRelationship
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
