import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {MagazineDataFacade} from "../../../data/MagazineDataFacade"
import {Magazine} from "./types/Magazine"
import {convertMagazineNode} from "./convertMagazineNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await MagazineDataFacade.getNodeCollection(params)

    const magazines: Magazine[] = []

    nodes.forEach(node => {
        magazines.push(convertMagazineNode(node))
    })

    return magazines.slice(0, nodeLimit)
}
