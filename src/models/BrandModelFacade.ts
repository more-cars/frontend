import {findAllNodes} from "./node-types/brands/findAllNodes"
import {findNodeById} from "./node-types/brands/findNodeById"
import {findConnectedCompany} from "./node-types/brands/findConnectedCompany"
import {findConnectedCarModels} from "./node-types/brands/findConnectedCarModels"
import {findConnectedImages} from "./node-types/brands/findConnectedImages"
import {findConnectedMainImage} from "./node-types/brands/findConnectedMainImage"

export const BrandModelFacade = {
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

    async getConnectedCompany(id: number) {
        return findConnectedCompany(id)
    },

    async getConnectedCarModels(id: number) {
        const nodes = await findConnectedCarModels(id)

        return [...nodes].sort((a, b) => (a.name + a.built_from).localeCompare(b.name + b.built_from))
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },
}
