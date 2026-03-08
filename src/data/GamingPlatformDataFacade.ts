import {getAllGamingPlatforms} from "./node-types/gaming-platforms/getAllGamingPlatforms"
import {getGamingPlatformById} from "./node-types/gaming-platforms/getGamingPlatformById"

export const GamingPlatformDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllGamingPlatforms(params)
    },

    async getNodeById(id: number) {
        return getGamingPlatformById(id)
    },
}
