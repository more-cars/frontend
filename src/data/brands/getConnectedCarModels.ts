import type {BrandHasCarModelRelation} from "../../types/brands/BrandHasCarModelRelation.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getConnectedCarModels(brandId: number): Promise<false | Array<BrandHasCarModelRelation>> {
    return (await requestDataFromApi(`/brands/${brandId}/has-car-model`)).data
}
