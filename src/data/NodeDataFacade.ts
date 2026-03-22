import {getApiNodeById} from "./nodes/getNodeById"

export const NodeDataFacade = {
    async getApiNodeById(id: number) {
        return getApiNodeById(id)
    },
}
