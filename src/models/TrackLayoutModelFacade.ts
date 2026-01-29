import {findAllNodes} from "./node-types/track-layouts/findAllNodes"

export const TrackLayoutModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },
}
