import {findAllNodes} from "./node-types/companies/findAllNodes"
import {findNodeById} from "./node-types/companies/findNodeById"
import {findConnectedMainImage} from "./node-types/companies/findConnectedMainImage"

export class CompanyModelFacade {
    static async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    }

    static async getNodeById(id: number) {
        return findNodeById(id)
    }

    static async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)
    }
}
