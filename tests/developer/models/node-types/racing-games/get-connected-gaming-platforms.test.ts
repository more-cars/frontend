import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedGamingPlatforms} from "../../../../../src/models/node-types/racing-games/findConnectedGamingPlatforms"
import {RacingGameReleasedOnGamingPlatformRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameReleasedOnGamingPlatformRelationship"
import {FakeGamingPlatform} from "../../../../_toolbox/fixtures/node-types/FakeGamingPlatform"

describe('Collect connected GAMING PLATFORMS for the RACING GAME detail page', () => {
    test('when no GAMING PLATFORMS are connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedGamingPlatformNodes').mockResolvedValue([])

        expect(await findConnectedGamingPlatforms(12345678))
            .toHaveLength(0)
    })

    test('when there are GAMING PLATFORMS connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedGamingPlatformNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeGamingPlatform.data} as unknown as RacingGameReleasedOnGamingPlatformRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeGamingPlatform.data} as unknown as RacingGameReleasedOnGamingPlatformRelationship,
        ])

        expect(await findConnectedGamingPlatforms(12345678))
            .toHaveLength(2)
    })
})
