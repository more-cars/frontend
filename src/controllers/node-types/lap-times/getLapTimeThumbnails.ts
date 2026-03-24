import {LapTime} from "../../../models/node-types/lap-times/types/LapTime"
import {Image} from "../../../models/node-types/images/types/Image"
import {LapTimeModelFacade} from "../../../models/LapTimeModelFacade"

export async function getLapTimeThumbnails(lapTimes: LapTime[]) {
    const thumbnails = new Map<number, Image | null>

    for (const lapTime of lapTimes) {
        thumbnails.set(lapTime.fields.id, await LapTimeModelFacade.getConnectedMainImage(lapTime.fields.id) || null)
    }

    return thumbnails
}
