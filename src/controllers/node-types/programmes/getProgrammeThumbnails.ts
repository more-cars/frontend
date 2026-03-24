import {Programme} from "../../../models/node-types/programmes/types/Programme"
import {Image} from "../../../models/node-types/images/types/Image"
import {ProgrammeModelFacade} from "../../../models/ProgrammeModelFacade"

export async function getProgrammeThumbnails(programmes: Programme[]) {
    const thumbnails = new Map<number, Image | null>

    for (const programme of programmes) {
        thumbnails.set(programme.fields.id, await ProgrammeModelFacade.getConnectedMainImage(programme.fields.id) || null)
    }

    return thumbnails
}
