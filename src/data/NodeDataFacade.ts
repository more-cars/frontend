import {getNodeById} from "./nodes/getNodeById"

export const NodeDataFacade = {
    async getNodeById(id: number) {
        return getNodeById(id)
    },
}
