import {RacingSeriesDataFacade} from "../../../data/RacingSeriesDataFacade"
import {convertRacingSeriesNode} from "./convertRacingSeriesNode"

export async function findNodeById(id: number) {
    const node = await RacingSeriesDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertRacingSeriesNode(node)
}
