import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findConnectedSessionResults} from "../../../../../src/models/node-types/racing-sessions/findConnectedSessionResults"
import {RacingSessionHasSessionResultRelationship} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionHasSessionResultRelationship"

describe('Collect connected SESSION RESULTS for the RACING SESSION detail page', () => {
    test('when no SESSION RESULTS are connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedSessionResultNodes').mockResolvedValue([])

        expect(await findConnectedSessionResults(1))
            .toHaveLength(0)
    })

    test('when there are SESSION RESULTS connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedSessionResultNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RacingSessionHasSessionResultRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RacingSessionHasSessionResultRelationship,
        ])

        expect(await findConnectedSessionResults(1))
            .toHaveLength(2)
    })
})
