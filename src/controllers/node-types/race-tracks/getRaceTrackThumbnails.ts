import {RaceTrack} from "../../../models/node-types/race-tracks/types/RaceTrack"
import {Image} from "../../../models/node-types/images/types/Image"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"

export async function getRaceTrackThumbnails(raceTracks: RaceTrack[]) {
    const thumbnails = new Map<number, Image | null>

    for (const raceTrack of raceTracks) {
        thumbnails.set(raceTrack.id, await RaceTrackModelFacade.getConnectedMainImage(raceTrack.id) || null)
    }

    return thumbnails
}
