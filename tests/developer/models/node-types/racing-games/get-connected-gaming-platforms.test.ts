import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedGamingPlatforms} from "../../../../../src/models/node-types/racing-games/findConnectedGamingPlatforms"
import {RacingGameReleasedOnGamingPlatformRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameReleasedOnGamingPlatformRelationship"

describe('Collect connected GAMING PLATFORMS for the RACING GAME detail page', () => {
    test('when no GAMING PLATFORMS are connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedGamingPlatformNodes').mockResolvedValue([])

        expect(await findConnectedGamingPlatforms(1))
            .toHaveLength(0)
    })

    test('when there are GAMING PLATFORMS connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedGamingPlatformNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RacingGameReleasedOnGamingPlatformRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RacingGameReleasedOnGamingPlatformRelationship,
        ])

        expect(await findConnectedGamingPlatforms(1))
            .toHaveLength(2)
    })
})
