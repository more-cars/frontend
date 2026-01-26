import {getAllCompanies} from "./node-types/companies/getAllCompanies"
import {getCompanyById} from "./node-types/companies/getCompanyById"
import {getConnectedMainImage} from "./node-types/companies/getConnectedMainImage"
import {getConnectedBrands} from "./node-types/companies/getConnectedBrands"
import {getConnectedImages} from "./node-types/companies/getConnectedImages"

export const CompanyDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllCompanies(params)
    },

    async getNodeById(id: number) {
        return getCompanyById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedBrandNodes(id: number) {
        return getConnectedBrands(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
