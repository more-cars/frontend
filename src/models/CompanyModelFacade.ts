import {findAllNodes} from "./node-types/companies/findAllNodes"
import {findNodeById} from "./node-types/companies/findNodeById"
import {findConnectedMainImage} from "./node-types/companies/findConnectedMainImage"
import {findConnectedBrands} from "./node-types/companies/findConnectedBrands"
import {findConnectedImages} from "./node-types/companies/findConnectedImages"

export const CompanyModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)
    },

    async getConnectedBrands(id: number) {
        return await findConnectedBrands(id)
    },

    async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    },
}
