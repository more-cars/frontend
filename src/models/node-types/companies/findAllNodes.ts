import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {CompanyDataFacade} from "../../../data/CompanyDataFacade"
import {Company} from "./types/Company"
import {convertCompanyNode} from "./convertCompanyNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await CompanyDataFacade.getNodeCollection(params)

    const companies: Company[] = []

    nodes.forEach(node => {
        companies.push(convertCompanyNode(node))
    })

    return companies.slice(0, nodeLimit)
}
