import {RacingSession} from "../../../models/node-types/racing-sessions/types/RacingSession"
import {Image} from "../../../models/node-types/images/types/Image"
import {RacingSessionModelFacade} from "../../../models/RacingSessionModelFacade"

export async function getRacingSessionThumbnails(racingSessions: RacingSession[]) {
    const thumbnails = new Map<number, Image | null>

    for (const racingSession of racingSessions) {
        thumbnails.set(racingSession.id, await RacingSessionModelFacade.getConnectedMainImage(racingSession.id) || null)
    }

    return thumbnails
}
