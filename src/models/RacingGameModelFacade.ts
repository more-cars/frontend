import {findAllNodes} from "./node-types/racing-games/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/racing-games/findNodeById"
import type {RacingGame} from "./node-types/racing-games/types/RacingGame"
import {getNodeTitle} from "./node-types/racing-games/getNodeTitle"
import {getNodeSubTitle} from "./node-types/racing-games/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/racing-games/findConnectedMainImage"
import {findConnectedCarModelVariants} from "./node-types/racing-games/findConnectedCarModelVariants"
import {findConnectedTrackLayouts} from "./node-types/racing-games/findConnectedTrackLayouts"
import {findConnectedGamingPlatforms} from "./node-types/racing-games/findConnectedGamingPlatforms"
import {findConnectedImages} from "./node-types/racing-games/findConnectedImages"
import {findConnectedVideos} from "./node-types/racing-games/findConnectedVideos"

export const RacingGameModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.RACING_GAME)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: RacingGame) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: RacingGame) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedCarModelVariants(id: number) {
        return findConnectedCarModelVariants(id)
    },

    async getConnectedTrackLayouts(id: number) {
        return findConnectedTrackLayouts(id)
    },

    async getConnectedGamingPlatforms(id: number) {
        return findConnectedGamingPlatforms(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
