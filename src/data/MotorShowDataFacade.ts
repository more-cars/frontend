import {getAllMotorShows} from "./node-types/motor-shows/getAllMotorShows"

export const MotorShowDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMotorShows(params)
    },
}
