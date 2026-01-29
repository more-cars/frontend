import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/racing-series/findNodeById"
import type {RacingSeriesNode} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesNode"

describe('Collect node for the RACING SERIES detail page', () => {
    test('when the RACING SERIES does not exist', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the RACING SERIES exists', async () => {
        const node = {id: 1, name: "dummy 1"} as RacingSeriesNode
        vi.spyOn(RacingSeriesDataFacade, 'getNodeById').mockResolvedValue(node)

        const racingSeries = await findNodeById(1)

        expect(racingSeries?.id).toEqual(node.id)
        expect(racingSeries?.name).toEqual(node.name)
    })
})
