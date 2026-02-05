import {CompanyDataFacade} from "../../../data/CompanyDataFacade"
import {convertBrandNode} from "../brands/convertBrandNode"
import {Brand} from "../brands/types/Brand"

export async function findConnectedBrands(id: number) {
    const relations = await CompanyDataFacade.getConnectedBrandNodes(id)
    const brands: Brand[] = []

    for (const relation of relations) {
        brands.push(convertBrandNode(relation.partner_node))
    }

    return [...brands].sort((a, b) => a.name.localeCompare(b.name))
}
