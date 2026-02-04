import {findAllNodes} from "./node-types/racing-sessions/findAllNodes"
import {findNodeById} from "./node-types/racing-sessions/findNodeById"
import {findConnectedMainImage} from "./node-types/racing-sessions/findConnectedMainImage"
import {findConnectedRacingEvent} from "./node-types/racing-sessions/findConnectedRacingEvent"
import {findConnectedImages} from "./node-types/racing-sessions/findConnectedImages"
import {findConnectedSessionResults} from "./node-types/racing-sessions/findConnectedSessionResults"

export const RacingSessionModelFacade = {
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

    async getConnectedRacingEvent(id: number) {
        return findConnectedRacingEvent(id)
    },

    async getConnectedImages(id: number) {
        const nodes = await findConnectedImages(id)

        return [...nodes].sort((a, b) => a.name.localeCompare(b.name))
    },

    async getConnectedSessionResults(id: number) {
        const nodes = await findConnectedSessionResults(id)

        return [...nodes].sort((a, b) => a.driver_name.localeCompare(b.driver_name))
    },
}
