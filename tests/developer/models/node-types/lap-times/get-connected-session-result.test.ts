import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedSessionResult} from "../../../../../src/models/node-types/lap-times/findConnectedSessionResult"
import {LapTimeBelongsToSessionResultRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeBelongsToSessionResultRelationship"

describe('Collect connected SESSION RESULT for the LAP TIME detail page', () => {
    test('when no SESSION RESULT is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedSessionResultNode').mockResolvedValue(null)

        expect(await findConnectedSessionResult(1))
            .toEqual(null)
    })

    test('when there is a SESSION RESULT connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as LapTimeBelongsToSessionResultRelationship
        vi.spyOn(LapTimeDataFacade, 'getConnectedSessionResultNode').mockResolvedValue(data)

        expect(await findConnectedSessionResult(1))
            .toHaveProperty('id', 1)
    })
})
