import {findAllNodes} from "./node-types/programme-episodes/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/programme-episodes/findNodeById"

export const ProgrammeEpisodeModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.PROGRAMME_EPISODE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },
}
