import {RaceTrackNode} from "../../../data/node-types/race-tracks/types/RaceTrackNode"
import {RaceTrack} from "./types/RaceTrack"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertRaceTrackNode(dataNode: RaceTrackNode) {
    const raceTrack: RaceTrack = {
        type: ModelNodeType.RACE_TRACK,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            opened: dataNode.data.opened || null,
            closed: dataNode.data.closed || null,
            type: dataNode.data.type || null,
            location: dataNode.data.location || null,
            geo_position: dataNode.data.geo_position || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return raceTrack
}
