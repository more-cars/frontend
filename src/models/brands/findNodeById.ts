import {BrandDataFacade} from "../../data/BrandDataFacade"

export async function findNodeById(id: number) {
    return BrandDataFacade.getNodeById(id)
}
