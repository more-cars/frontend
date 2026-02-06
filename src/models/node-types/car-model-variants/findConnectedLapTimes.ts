import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {LapTime} from "../lap-times/types/LapTime"
import {convertLapTimeNode} from "../lap-times/convertLapTimeNode"

export async function findConnectedLapTimes(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedLapTimeNodes(id)
    const lapTimes: LapTime[] = []

    for (const relation of relations) {
        lapTimes.push(convertLapTimeNode(relation.partner_node))
    }

    return [...lapTimes].sort((a, b) => a.driver_name.localeCompare(b.driver_name))
}
