import {findAllNodes} from "./node-types/racing-series/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/racing-series/findNodeById"
import {findConnectedMainImage} from "./node-types/racing-series/findConnectedMainImage"
import {findConnectedImages} from "./node-types/racing-series/findConnectedImages"
import {findConnectedRacingEvents} from "./node-types/racing-series/findConnectedRacingEvents"

export const RacingSeriesModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.RACING_SERIES)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedRacingEvents(id: number) {
        return findConnectedRacingEvents(id)
    },
}
