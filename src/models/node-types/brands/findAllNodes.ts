import {BrandDataFacade} from "../../../data/BrandDataFacade"
import type {BrandNode} from "./types/BrandNode"

export async function findAllNodes() {
    return (await BrandDataFacade.getNodeCollection()) as BrandNode[]
}
