import type {CarModelBelongsToBrandRelation} from "../../types/car-models/CarModelBelongsToBrandRelation.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getConnectedBrand(carModelId: number): Promise<false | CarModelBelongsToBrandRelation> {
    return requestDataFromApi(`/car-models/${carModelId}/belongs-to-brand`)
}
