import {findAllNodes} from "./node-types/images/findAllNodes"
import {findNodeById} from "./node-types/images/findNodeById"
import {findConnectedBrands} from "./node-types/images/findConnectedBrands"
import {findConnectedCarModels} from "./node-types/images/findConnectedCarModels"

export const ImageModelFacade = {
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

    async getConnectedBrands(id: number) {
        return await findConnectedBrands(id)
    },

    async getConnectedCarModels(id: number) {
        return await findConnectedCarModels(id)
    },
}
