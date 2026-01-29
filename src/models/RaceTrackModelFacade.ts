import {findAllNodes} from "./node-types/race-tracks/findAllNodes"
import {findNodeById} from "./node-types/race-tracks/findNodeById"
import {findConnectedMainImage} from "./node-types/race-tracks/findConnectedMainImage"
import {findConnectedImages} from "./node-types/race-tracks/findConnectedImages"
import {findConnectedTrackLayouts} from "./node-types/race-tracks/findConnectedTrackLayouts"

export const RaceTrackModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        // TODO This is a temporary hack until the API can provide this information.
        //      Right now, only the pagination bar needs this information.
        //      It only needs to know if there are more than 100 items or not.
        //      Therefore, returning either 100 or 101.
        const page2nodes = await findAllNodes({page: 2})

        return page2nodes.length > 0 ? 101 : 100
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)
    },

    async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    },

    async getConnectedTrackLayouts(id: number) {
        const nodes = await findConnectedTrackLayouts(id)

        return [...nodes].sort((a, b) => a.name.localeCompare(b.name))
    },
}
