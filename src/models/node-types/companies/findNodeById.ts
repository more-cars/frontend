import {CompanyDataFacade} from "../../../data/CompanyDataFacade"
import {convertCompanyNode} from "./convertCompanyNode"

export async function findNodeById(id: number) {
    const node = await CompanyDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertCompanyNode(node)
}
