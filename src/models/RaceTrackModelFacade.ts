import {findAllNodes} from "./node-types/race-tracks/findAllNodes"
import {findNodeById} from "./node-types/race-tracks/findNodeById"

export const RaceTrackModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },
}
