import {getAllSessionResults} from "./node-types/session-results/getAllSessionResults"

export const SessionResultDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllSessionResults(params)
    },
}
