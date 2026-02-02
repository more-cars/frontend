import {findAllNodes} from "./node-types/racing-events/findAllNodes"
import {findNodeById} from "./node-types/racing-events/findNodeById"
import {findConnectedMainImage} from "./node-types/racing-events/findConnectedMainImage"
import {findConnectedRacingSeries} from "./node-types/racing-events/findConnectedRacingSeries"
import {findConnectedSuccessor} from "./node-types/racing-events/findConnectedSuccessor"

export const RacingEventModelFacade = {
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
        return findConnectedMainImage(id)
    },

    async getConnectedRacingSeries(id: number) {
        return findConnectedRacingSeries(id)
    },

    async getConnectedSuccessor(id: number) {
        return findConnectedSuccessor(id)
    },
}
