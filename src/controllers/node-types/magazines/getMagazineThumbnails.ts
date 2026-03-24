import {Magazine} from "../../../models/node-types/magazines/types/Magazine"
import {Image} from "../../../models/node-types/images/types/Image"
import {MagazineModelFacade} from "../../../models/MagazineModelFacade"

export async function getMagazineThumbnails(magazines: Magazine[]) {
    const thumbnails = new Map<number, Image | null>

    for (const magazine of magazines) {
        thumbnails.set(magazine.fields.id, await MagazineModelFacade.getConnectedMainImage(magazine.fields.id) || null)
    }

    return thumbnails
}
