import type {CarModelHasImageRelation} from "../../types/car-models/CarModelHasImageRelation"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getConnectedImages(carModelId: number): Promise<false | Array<CarModelHasImageRelation>> {
    return (await requestDataFromApi(`/car-models/${carModelId}/has-image`)).data
}
