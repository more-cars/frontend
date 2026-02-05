import {getAllSessionResults} from "./node-types/session-results/getAllSessionResults"
import {getSessionResultById} from "./node-types/session-results/getSessionResultById"
import {getConnectedMainImage} from "./node-types/session-results/getConnectedMainImage"
import {getConnectedRacingSession} from "./node-types/session-results/getConnectedRacingSession"
import {getConnectedImages} from "./node-types/session-results/getConnectedImages"
import {getConnectedLapTimes} from "./node-types/session-results/getConnectedLapTimes"

export const SessionResultDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllSessionResults(params)
    },

    async getNodeById(id: number) {
        return getSessionResultById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedRacingSessionNode(id: number) {
        return getConnectedRacingSession(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedLapTimeNodes(id: number) {
        return getConnectedLapTimes(id)
    },
}
