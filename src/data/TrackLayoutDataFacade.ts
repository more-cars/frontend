import {getAllTrackLayouts} from "./node-types/track-layouts/getAllTrackLayouts"

export const TrackLayoutDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllTrackLayouts(params)
    },
}
