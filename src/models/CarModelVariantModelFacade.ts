import {findAllNodes} from "./node-types/car-model-variants/findAllNodes"
import {findNodeById} from "./node-types/car-model-variants/findNodeById"
import {findConnectedMainImage} from "./node-types/car-model-variants/findConnectedMainImage"
import {findConnectedCarModel} from "./node-types/car-model-variants/findConnectedCarModel"
import {findConnectedLapTimes} from "./node-types/car-model-variants/findConnectedLapTimes"
import {findConnectedSessionResults} from "./node-types/car-model-variants/findConnectedSessionResults"

export const CarModelVariantModelFacade = {
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

    async getConnectedCarModel(id: number) {
        return findConnectedCarModel(id)
    },

    async getConnectedLapTimes(id: number) {
        return findConnectedLapTimes(id)
    },

    async getConnectedSessionResults(id: number) {
        return findConnectedSessionResults(id)
    },
}
