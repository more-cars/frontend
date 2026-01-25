import {getAllCompanies} from "./node-types/companies/getAllCompanies"
import {getCompanyById} from "./node-types/companies/getCompanyById"
import {getConnectedMainImage} from "./node-types/companies/getConnectedMainImage"
import {getConnectedBrands} from "./node-types/companies/getConnectedBrands"
import {getConnectedImages} from "./node-types/companies/getConnectedImages"

export class CompanyDataFacade {
    static async getNodeCollection(params?: { page: number }) {
        return getAllCompanies(params)
    }

    static async getNodeById(id: number) {
        return getCompanyById(id)
    }

    static async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    }

    static async getConnectedBrandNodes(id: number) {
        return getConnectedBrands(id)
    }

    static async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    }
}
