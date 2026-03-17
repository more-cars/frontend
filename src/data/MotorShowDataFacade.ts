import {getAllMotorShows} from "./node-types/motor-shows/getAllMotorShows"
import {getMotorShowById} from "./node-types/motor-shows/getMotorShowById"

export const MotorShowDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMotorShows(params)
    },

    async getNodeById(id: number) {
        return getMotorShowById(id)
    },
}
