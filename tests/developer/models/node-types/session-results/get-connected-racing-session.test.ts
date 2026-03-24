import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findConnectedRacingSession} from "../../../../../src/models/node-types/session-results/findConnectedRacingSession"
import {SessionResultBelongsToRacingSessionRelationship} from "../../../../../src/data/node-types/session-results/types/SessionResultBelongsToRacingSessionRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected RACING SESSION for the SESSION RESULT detail page', () => {
    test('when no RACING SESSION is connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedRacingSessionNode').mockResolvedValue(null)

        expect(await findConnectedRacingSession(1))
            .toEqual(null)
    })

    test('when there is a RACING SESSION connected', async () => {
        const data = {partner_node: {type: DataNodeType.RACING_SESSION, data: {id: 1, name: "dummy"}}} as SessionResultBelongsToRacingSessionRelationship
        vi.spyOn(SessionResultDataFacade, 'getConnectedRacingSessionNode').mockResolvedValue(data)

        expect(await findConnectedRacingSession(1))
            .toHaveProperty('id', 1)
    })
})
