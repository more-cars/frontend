import {BrandDataFacade} from "../../../data/BrandDataFacade"
import type {BrandNode} from "./types/BrandNode"

export async function findNodeById(id: number) {
    return (await BrandDataFacade.getNodeById(id)) as BrandNode
}
