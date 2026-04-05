import {findAllNodes} from "./node-types/motor-shows/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/motor-shows/findNodeById"
import type {MotorShow} from "./node-types/motor-shows/types/MotorShow"
import {getNodeTitle} from "./node-types/motor-shows/getNodeTitle"
import {getNodeSubTitle} from "./node-types/motor-shows/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/motor-shows/findConnectedMainImage"
import {findConnectedCarModelVariants} from "./node-types/motor-shows/findConnectedCarModelVariants"
import {findConnectedImages} from "./node-types/motor-shows/findConnectedImages"
import {findConnectedVideos} from "./node-types/motor-shows/findConnectedVideos"

export const MotorShowModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MOTOR_SHOW)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: MotorShow) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: MotorShow) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedCarModelVariants(id: number) {
        return findConnectedCarModelVariants(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
