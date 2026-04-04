import {getAllVideos} from "./node-types/videos/getAllVideos"
import {getVideoById} from "./node-types/videos/getVideoById"

export const VideoDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllVideos(params)
    },

    async getNodeById(id: number) {
        return getVideoById(id)
    },
}
