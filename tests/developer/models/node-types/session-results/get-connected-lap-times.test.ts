import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findConnectedLapTimes} from "../../../../../src/models/node-types/session-results/findConnectedLapTimes"
import {
    SessionResultHasLapTimeRelationship
} from "../../../../../src/data/node-types/session-results/types/SessionResultHasLapTimeRelationship"

describe('Collect connected LAP TIMES for the SESSION RESULT detail page', () => {
    test('when no LAP TIMES are connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedLapTimeNodes').mockResolvedValue([])

        expect(await findConnectedLapTimes(1))
            .toHaveLength(0)
    })

    test('when there are LAP TIMES connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedLapTimeNodes').mockResolvedValue([
            {id: 2, driver_name: "dummy 2", partner_node: {}} as unknown as SessionResultHasLapTimeRelationship,
            {id: 3, driver_name: "dummy 3", partner_node: {}} as unknown as SessionResultHasLapTimeRelationship,
        ])

        expect(await findConnectedLapTimes(1))
            .toHaveLength(2)
    })
})
