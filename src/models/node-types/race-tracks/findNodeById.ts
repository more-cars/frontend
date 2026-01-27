import {RaceTrackDataFacade} from "../../../data/RaceTrackDataFacade"
import {convertRaceTrackNode} from "./convertRaceTrackNode"

export async function findNodeById(id: number) {
    const node = await RaceTrackDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertRaceTrackNode(node)
}
