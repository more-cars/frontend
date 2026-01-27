import {getAllRaceTracks} from "./node-types/race-tracks/getAllRaceTracks"
import {getRaceTrackById} from "./node-types/race-tracks/getRaceTrackById"
import {getConnectedMainImage} from "./node-types/race-tracks/getConnectedMainImage"
import {getConnectedImages} from "./node-types/race-tracks/getConnectedImages"

export const RaceTrackDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRaceTracks(params)
    },

    async getNodeById(id: number) {
        return getRaceTrackById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
