import {TrackLayout} from "../../../models/node-types/track-layouts/types/TrackLayout"
import {Image} from "../../../models/node-types/images/types/Image"
import {TrackLayoutModelFacade} from "../../../models/TrackLayoutModelFacade"

export async function getTrackLayoutThumbnails(trackLayouts: TrackLayout[]) {
    const thumbnails = new Map<number, Image | null>

    for (const trackLayout of trackLayouts) {
        thumbnails.set(trackLayout.id, await TrackLayoutModelFacade.getConnectedMainImage(trackLayout.id) || null)
    }

    return thumbnails
}
