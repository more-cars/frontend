import {getAllVideos} from "./node-types/videos/getAllVideos"
import {getVideoById} from "./node-types/videos/getVideoById"
import {getConnectedNodes} from "./node-types/videos/getConnectedNodes"

export const VideoDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllVideos(params)
    },

    async getNodeById(id: number) {
        return getVideoById(id)
    },

    async getConnectedNodeNodes(id: number) {
        return getConnectedNodes(id)
    },
}
