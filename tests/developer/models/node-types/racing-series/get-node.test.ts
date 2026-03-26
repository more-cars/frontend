import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/racing-series/findNodeById"
import type {RacingSeriesNode} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the RACING SERIES detail page', () => {
    test('when the RACING SERIES does not exist', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the RACING SERIES exists', async () => {
        const node = {type: DataNodeType.RACING_SERIES, data: {id: 11111118, name: "dummy 1"}} as RacingSeriesNode
        vi.spyOn(RacingSeriesDataFacade, 'getNodeById').mockResolvedValue(node)

        const racingSeries = await findNodeById(11111118)

        expect(racingSeries?.fields.id).toEqual(node.data.id)
        expect(racingSeries?.fields.name).toEqual(node.data.name)
    })
})
