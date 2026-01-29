import {TrackLayoutDataFacade} from "../../../data/TrackLayoutDataFacade"
import {convertRaceTrackNode} from "../race-tracks/convertRaceTrackNode"

export async function findConnectedRaceTrack(id: number) {
    const relation = await TrackLayoutDataFacade.getConnectedRaceTrackNode(id)

    if (!relation) {
        return null
    }

    return convertRaceTrackNode(relation.partner_node)
}
