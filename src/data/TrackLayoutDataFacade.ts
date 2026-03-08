import {getAllTrackLayouts} from "./node-types/track-layouts/getAllTrackLayouts"
import {getTrackLayoutById} from "./node-types/track-layouts/getTrackLayoutById"
import {getConnectedMainImage} from "./node-types/track-layouts/getConnectedMainImage"
import {getConnectedRaceTrack} from "./node-types/track-layouts/getConnectedRaceTrack"
import {getConnectedRacingEvents} from "./node-types/track-layouts/getConnectedRacingEvents"
import {getConnectedRacingGames} from "./node-types/track-layouts/getConnectedRacingGames"
import {getConnectedImages} from "./node-types/track-layouts/getConnectedImages"

export const TrackLayoutDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllTrackLayouts(params)
    },

    async getNodeById(id: number) {
        return getTrackLayoutById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedRaceTrackNode(id: number) {
        return getConnectedRaceTrack(id)
    },

    async getConnectedRacingEventNodes(id: number) {
        return getConnectedRacingEvents(id)
    },

    async getConnectedRacingGameNodes(id: number) {
        return getConnectedRacingGames(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
