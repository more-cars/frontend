import {getAllGamingPlatforms} from "./node-types/gaming-platforms/getAllGamingPlatforms"
import {getGamingPlatformById} from "./node-types/gaming-platforms/getGamingPlatformById"
import {getConnectedMainImage} from "./node-types/gaming-platforms/getConnectedMainImage"

export const GamingPlatformDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllGamingPlatforms(params)
    },

    async getNodeById(id: number) {
        return getGamingPlatformById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },
}
