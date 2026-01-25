import {BrandDataFacade} from "../../../data/BrandDataFacade"
import {convertCompanyNode} from "../companies/convertCompanyNode"

export async function findConnectedCompany(id: number) {
    const relation = await BrandDataFacade.getConnectedCompanyNode(id)

    if (!relation) {
        return null
    }

    return convertCompanyNode(relation.partner_node)
}
