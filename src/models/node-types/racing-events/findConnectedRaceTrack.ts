import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {convertRaceTrackNode} from "../race-tracks/convertRaceTrackNode"

export async function findConnectedRaceTrack(id: number) {
    const relation = await RacingEventDataFacade.getConnectedRaceTrackNode(id)

    if (!relation) {
        return null
    }

    return convertRaceTrackNode(relation.partner_node)
}
