import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/lap-times/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/lap-times/findNodeById"
import type {LapTime} from "./node-types/lap-times/types/LapTime"
import {getNodeTitle} from "./node-types/lap-times/getNodeTitle"
import {getNodeSubTitle} from "./node-types/lap-times/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/lap-times/findConnectedMainImage"
import {findConnectedTrackLayout} from "./node-types/lap-times/findConnectedTrackLayout"
import {findConnectedSessionResult} from "./node-types/lap-times/findConnectedSessionResult"
import {findConnectedImages} from "./node-types/lap-times/findConnectedImages"
import {findConnectedCarModelVariant} from "./node-types/lap-times/findConnectedCarModelVariant"
import {findConnectedVideos} from "./node-types/lap-times/findConnectedVideos"

export const LapTimeModelFacade = {
    async getAllNodes(params?: ModelSearchParams) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.LAP_TIME)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: LapTime) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: LapTime) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedTrackLayout(id: number) {
        return findConnectedTrackLayout(id)
    },

    async getConnectedSessionResult(id: number) {
        return findConnectedSessionResult(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedCarModelVariant(id: number) {
        return findConnectedCarModelVariant(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
