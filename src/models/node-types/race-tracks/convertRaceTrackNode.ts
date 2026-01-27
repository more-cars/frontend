import {RaceTrackNode} from "../../../data/node-types/race-tracks/types/RaceTrackNode"
import {RaceTrack} from "./types/RaceTrack"

export function convertRaceTrackNode(dataNode: RaceTrackNode) {
    const raceTrack: RaceTrack = {
        id: dataNode.id,
        name: dataNode.name,
        opened: dataNode.opened || null,
        closed: dataNode.closed || null,
        type: dataNode.type || null,
        location: dataNode.location || null,
        geo_position: dataNode.geo_position || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return raceTrack
}
