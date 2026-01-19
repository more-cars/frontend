import {getAllCompanies} from "./node-types/companies/getAllCompanies"
import {getCompanyById} from "./node-types/companies/getCompanyById"

export class CompanyDataFacade {
    static async getNodeCollection(params?: { page: number }) {
        return getAllCompanies(params)
    }

    static async getNodeById(id: number) {
        return getCompanyById(id)
    }
}
