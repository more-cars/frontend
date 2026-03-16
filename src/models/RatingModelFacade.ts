import {findAllNodes} from "./node-types/ratings/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/ratings/findNodeById"
import {findConnectedMainImage} from "./node-types/ratings/findConnectedMainImage"
import {findConnectedMagazineIssue} from "./node-types/ratings/findConnectedMagazineIssue"

export const RatingModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.RATING)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedMagazineIssue(id: number) {
        return findConnectedMagazineIssue(id)
    },
}
