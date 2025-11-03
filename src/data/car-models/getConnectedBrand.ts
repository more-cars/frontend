import type {CarModelBelongsToBrandRelation} from "../../types/car-models/CarModelBelongsToBrandRelation"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getConnectedBrand(carModelId: number): Promise<false | CarModelBelongsToBrandRelation> {
    return requestDataFromApi(`/car-models/${carModelId}/belongs-to-brand`)
}
