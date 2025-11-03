import type {BrandHasImageRelation} from "../../types/brands/BrandHasImageRelation.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getConnectedImages(brandId: number): Promise<false | Array<BrandHasImageRelation>> {
    return (await requestDataFromApi(`/brands/${brandId}/has-image`)).data
}
