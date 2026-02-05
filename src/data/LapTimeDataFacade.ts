import {getAllLapTimes} from "./node-types/lap-times/getAllLapTimes"
import {getLapTimeById} from "./node-types/lap-times/getLapTimeById"
import {getConnectedMainImage} from "./node-types/lap-times/getConnectedMainImage"
import {getConnectedTrackLayout} from "./node-types/lap-times/getConnectedTrackLayout"
import {getConnectedSessionResult} from "./node-types/lap-times/getConnectedSessionResult"
import {getConnectedImages} from "./node-types/lap-times/getConnectedImages"

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

    async getConnectedTrackLayoutNode(id: number) {
        return getConnectedTrackLayout(id)
    },

    async getConnectedSessionResultNode(id: number) {
        return getConnectedSessionResult(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
