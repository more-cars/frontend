import {MotorShow} from "../../../models/node-types/motor-shows/types/MotorShow"
import {Image} from "../../../models/node-types/images/types/Image"
import {MotorShowModelFacade} from "../../../models/MotorShowModelFacade"

export async function getMotorShowThumbnails(motorShows: MotorShow[]) {
    const thumbnails = new Map<number, Image | null>

    for (const motorShow of motorShows) {
        thumbnails.set(motorShow.id, await MotorShowModelFacade.getConnectedMainImage(motorShow.id) || null)
    }

    return thumbnails
}
