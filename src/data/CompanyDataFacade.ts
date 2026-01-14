import {getAllCompanies} from "./node-types/companies/getAllCompanies"

export class CompanyDataFacade {
    static async getNodeCollection() {
        return getAllCompanies()
    }
}
