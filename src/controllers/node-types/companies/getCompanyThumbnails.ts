import {Company} from "../../../models/node-types/companies/types/Company"
import {Image} from "../../../models/node-types/images/types/Image"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"

export async function getCompanyThumbnails(companies: Company[]) {
    const thumbnails = new Map<number, Image | null>

    for (const company of companies) {
        thumbnails.set(company.id, await CompanyModelFacade.getConnectedMainImage(company.id) || null)
    }

    return thumbnails
}
