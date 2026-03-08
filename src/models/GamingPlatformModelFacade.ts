import {findAllNodes} from "./node-types/gaming-platforms/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/gaming-platforms/findNodeById"
import {findConnectedMainImage} from "./node-types/gaming-platforms/findConnectedMainImage"
import {findConnectedRacingGames} from "./node-types/gaming-platforms/findConnectedRacingGames"
import {findConnectedImages} from "./node-types/gaming-platforms/findConnectedImages"

export const GamingPlatformModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.GAMING_PLATFORM)
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
