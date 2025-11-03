import type {BrandHasImageRelation} from "../../types/brands/BrandHasImageRelation"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getConnectedImages(brandId: number): Promise<false | Array<BrandHasImageRelation>> {
    return (await requestDataFromApi(`/brands/${brandId}/has-image`)).data
}
