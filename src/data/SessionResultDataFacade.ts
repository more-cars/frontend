import {getAllSessionResults} from "./node-types/session-results/getAllSessionResults"
import {getSessionResultById} from "./node-types/session-results/getSessionResultById"

export const SessionResultDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllSessionResults(params)
    },

    async getNodeById(id: number) {
        return getSessionResultById(id)
    },
}
