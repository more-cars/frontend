import {findAllNodes} from "./node-types/lap-times/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/lap-times/findNodeById"
import type {LapTime} from "./node-types/lap-times/types/LapTime"
import {getNodeTitle} from "./node-types/lap-times/getNodeTitle"
import {findConnectedMainImage} from "./node-types/lap-times/findConnectedMainImage"
import {findConnectedTrackLayout} from "./node-types/lap-times/findConnectedTrackLayout"
import {findConnectedSessionResult} from "./node-types/lap-times/findConnectedSessionResult"
import {findConnectedImages} from "./node-types/lap-times/findConnectedImages"
import {findConnectedCarModelVariant} from "./node-types/lap-times/findConnectedCarModelVariant"

export const LapTimeModelFacade = {
    async getAllNodes(params: { page: number }) {
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
}
