import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-games/findConnectedMainImage"
import {RacingGameHasMainImageRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the RACING GAME detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as RacingGameHasMainImageRelationship
        vi.spyOn(RacingGameDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
