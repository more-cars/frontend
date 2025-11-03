import type {BrandHasCarModelRelation} from "../../types/brands/BrandHasCarModelRelation"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getConnectedCarModels(brandId: number): Promise<false | Array<BrandHasCarModelRelation>> {
    return (await requestDataFromApi(`/brands/${brandId}/has-car-model`)).data
}
