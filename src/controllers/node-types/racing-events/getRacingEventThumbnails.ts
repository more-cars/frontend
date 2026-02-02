import {RacingEvent} from "../../../models/node-types/racing-events/types/RacingEvent"
import {Image} from "../../../models/node-types/images/types/Image"
import {RacingEventModelFacade} from "../../../models/RacingEventModelFacade"

export async function getRacingEventThumbnails(racingEvents: RacingEvent[]) {
    const thumbnails = new Map<number, Image | null>

    for (const racingEvent of racingEvents) {
        thumbnails.set(racingEvent.id, await RacingEventModelFacade.getConnectedMainImage(racingEvent.id) || null)
    }

    return thumbnails
}
