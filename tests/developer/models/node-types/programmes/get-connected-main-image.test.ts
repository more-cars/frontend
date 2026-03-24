import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/programmes/findConnectedMainImage"
import {ProgrammeHasMainImageRelationship} from "../../../../../src/data/node-types/programmes/types/ProgrammeHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the PROGRAMME detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as ProgrammeHasMainImageRelationship
        vi.spyOn(ProgrammeDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
