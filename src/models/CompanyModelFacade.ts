import {findAllNodes} from "./node-types/companies/findAllNodes"

export class CompanyModelFacade {
    static async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    }
}
