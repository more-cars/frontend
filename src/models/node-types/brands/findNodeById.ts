import {BrandDataFacade} from "../../../data/BrandDataFacade"
import type {Brand} from "./types/Brand"

export async function findNodeById(id: number) {
    return (await BrandDataFacade.getNodeById(id)) as Brand
}
