import {getAllGamingPlatforms} from "./node-types/gaming-platforms/getAllGamingPlatforms"
import {getGamingPlatformById} from "./node-types/gaming-platforms/getGamingPlatformById"
import {getConnectedMainImage} from "./node-types/gaming-platforms/getConnectedMainImage"
import {getConnectedRacingGames} from "./node-types/gaming-platforms/getConnectedRacingGames"
import {getConnectedImages} from "./node-types/gaming-platforms/getConnectedImages"

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

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
