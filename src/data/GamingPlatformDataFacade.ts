import {getAllGamingPlatforms} from "./node-types/gaming-platforms/getAllGamingPlatforms"

export const GamingPlatformDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllGamingPlatforms(params)
    },
}
