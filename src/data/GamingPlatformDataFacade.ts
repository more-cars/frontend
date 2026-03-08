import {getAllGamingPlatforms} from "./node-types/gaming-platforms/getAllGamingPlatforms"
import {getGamingPlatformById} from "./node-types/gaming-platforms/getGamingPlatformById"
import {getConnectedMainImage} from "./node-types/gaming-platforms/getConnectedMainImage"
import {getConnectedRacingGames} from "./node-types/gaming-platforms/getConnectedRacingGames"

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

    async getConnectedRacingGameNodes(id: number) {
        return getConnectedRacingGames(id)
    },
}
