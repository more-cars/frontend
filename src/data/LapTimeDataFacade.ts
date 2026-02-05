import {getAllLapTimes} from "./node-types/lap-times/getAllLapTimes"
import {getLapTimeById} from "./node-types/lap-times/getLapTimeById"
import {getConnectedMainImage} from "./node-types/lap-times/getConnectedMainImage"
import {getConnectedSessionResult} from "./node-types/lap-times/getConnectedSessionResult"

export const LapTimeDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllLapTimes(params)
    },

    async getNodeById(id: number) {
        return getLapTimeById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedSessionResultNode(id: number) {
        return getConnectedSessionResult(id)
    },
}
