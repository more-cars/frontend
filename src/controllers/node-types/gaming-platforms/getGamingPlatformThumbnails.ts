import {GamingPlatform} from "../../../models/node-types/gaming-platforms/types/GamingPlatform"
import {Image} from "../../../models/node-types/images/types/Image"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"

export async function getGamingPlatformThumbnails(gamingPlatforms: GamingPlatform[]) {
    const thumbnails = new Map<number, Image | null>

    for (const gamingPlatform of gamingPlatforms) {
        thumbnails.set(gamingPlatform.id, await GamingPlatformModelFacade.getConnectedMainImage(gamingPlatform.id) || null)
    }

    return thumbnails
}
