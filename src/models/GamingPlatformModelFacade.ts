import {findAllNodes} from "./node-types/gaming-platforms/findAllNodes"
import {findNodeById} from "./node-types/gaming-platforms/findNodeById"
import {findConnectedMainImage} from "./node-types/gaming-platforms/findConnectedMainImage"
import {findConnectedRacingGames} from "./node-types/gaming-platforms/findConnectedRacingGames"
import {findConnectedImages} from "./node-types/gaming-platforms/findConnectedImages"

export const GamingPlatformModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        // TODO This is a temporary hack until the API can provide this information.
        //      Right now, only the pagination bar needs this information.
        //      It only needs to know if there are more than 100 items or not.
        //      Therefore, returning either 100 or 101.
        const page2nodes = await findAllNodes({page: 2})

        return page2nodes.length > 0 ? 101 : 100
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedRacingGames(id: number) {
        return findConnectedRacingGames(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
