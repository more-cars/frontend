import {findAllNodes} from "./node-types/race-tracks/findAllNodes"

export const RaceTrackModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },
}
