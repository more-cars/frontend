import {findAllNodes} from "./node-types/track-layouts/findAllNodes"
import {findNodeById} from "./node-types/track-layouts/findNodeById"

export const TrackLayoutModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },
}
