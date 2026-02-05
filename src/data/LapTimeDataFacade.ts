import {getAllLapTimes} from "./node-types/lap-times/getAllLapTimes"
import {getLapTimeById} from "./node-types/lap-times/getLapTimeById"

export const LapTimeDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllLapTimes(params)
    },

    async getNodeById(id: number) {
        return getLapTimeById(id)
    },
}
