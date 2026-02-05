import {SessionResultDataFacade} from "../../../data/SessionResultDataFacade"
import {LapTime} from "../lap-times/types/LapTime"
import {convertLapTimeNode} from "../lap-times/convertLapTimeNode"

export async function findConnectedLapTimes(id: number) {
    const relations = await SessionResultDataFacade.getConnectedLapTimeNodes(id)
    const lapTimes: LapTime[] = []

    for (const relation of relations) {
        lapTimes.push(convertLapTimeNode(relation.partner_node))
    }

    return lapTimes
}
