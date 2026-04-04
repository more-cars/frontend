import {getAllVideos} from "./node-types/videos/getAllVideos"

export const VideoDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllVideos(params)
    },
}
