import type {CarModelHasImageRelation} from "../../types/car-models/CarModelHasImageRelation.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getConnectedImages(carModelId: number): Promise<false | Array<CarModelHasImageRelation>> {
    return (await requestDataFromApi(`/car-models/${carModelId}/has-image`)).data
}
