import {findAllNodes} from "./node-types/programmes/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/programmes/findNodeById"
import type {Programme} from "./node-types/programmes/types/Programme"
import {getNodeTitle} from "./node-types/programmes/getNodeTitle"
import {getNodeSubTitle} from "./node-types/programmes/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/programmes/findConnectedMainImage"
import {findConnectedProgrammeEpisodes} from "./node-types/programmes/findConnectedProgrammeEpisodes"
import {findConnectedImages} from "./node-types/programmes/findConnectedImages"

export const ProgrammeModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.PROGRAMME)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: Programme) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: Programme) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedProgrammeEpisodes(id: number) {
        return findConnectedProgrammeEpisodes(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
