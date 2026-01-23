import {Company} from "../../../models/node-types/companies/types/Company"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"

export async function getCompanyThumbnails(companies: Company[]) {
    const thumbnails = []

    for (const company of companies) {
        const thumbnail = await CompanyModelFacade.getConnectedMainImage(company.id)
        thumbnails[company.id] = thumbnail || null
    }

    return thumbnails
}
