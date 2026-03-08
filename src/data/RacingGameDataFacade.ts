import {getAllRacingGames} from "./node-types/racing-games/getAllRacingGames"
import {getRacingGameById} from "./node-types/racing-games/getRacingGameById"
import {getConnectedMainImage} from "./node-types/racing-games/getConnectedMainImage"
import {getConnectedCarModelVariants} from "./node-types/racing-games/getConnectedCarModelVariants"
import {getConnectedTrackLayouts} from "./node-types/racing-games/getConnectedTrackLayouts"
import {getConnectedGamingPlatforms} from "./node-types/racing-games/getConnectedGamingPlatforms"

export const RacingGameDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingGames(params)
    },

    async getNodeById(id: number) {
        return getRacingGameById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedCarModelVariantNodes(id: number) {
        return getConnectedCarModelVariants(id)
    },

    async getConnectedTrackLayoutNodes(id: number) {
        return getConnectedTrackLayouts(id)
    },

    async getConnectedGamingPlatformNodes(id: number) {
        return getConnectedGamingPlatforms(id)
    },
}
