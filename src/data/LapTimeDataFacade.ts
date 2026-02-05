import {getAllLapTimes} from "./node-types/lap-times/getAllLapTimes"

export const LapTimeDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllLapTimes(params)
    },
}
