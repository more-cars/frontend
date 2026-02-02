import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {convertRacingSeriesNode} from "../racing-series/convertRacingSeriesNode"

export async function findConnectedRacingSeries(id: number) {
    const relation = await RacingEventDataFacade.getConnectedRacingSeriesNode(id)

    if (!relation) {
        return null
    }

    return convertRacingSeriesNode(relation.partner_node)
}
