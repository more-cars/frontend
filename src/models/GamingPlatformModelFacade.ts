import {findAllNodes} from "./node-types/gaming-platforms/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/gaming-platforms/findNodeById"
import type {GamingPlatform} from "./node-types/gaming-platforms/types/GamingPlatform"
import {getNodeTitle} from "./node-types/gaming-platforms/getNodeTitle"
import {getNodeSubTitle} from "./node-types/gaming-platforms/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/gaming-platforms/findConnectedMainImage"
import {findConnectedRacingGames} from "./node-types/gaming-platforms/findConnectedRacingGames"
import {findConnectedImages} from "./node-types/gaming-platforms/findConnectedImages"
import {findConnectedVideos} from "./node-types/gaming-platforms/findConnectedVideos"

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

    getNodeTitle(node: GamingPlatform) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: GamingPlatform) {
        return getNodeSubTitle(node)
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

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
