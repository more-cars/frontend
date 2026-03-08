import {findAllNodes} from "./node-types/magazine-issues/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"

export const MagazineIssueModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MAGAZINE_ISSUE)
    },
}
