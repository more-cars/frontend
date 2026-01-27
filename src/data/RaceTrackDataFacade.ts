import {getAllRaceTracks} from "./node-types/race-tracks/getAllRaceTracks"

export const RaceTrackDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRaceTracks(params)
    },
}
