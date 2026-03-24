import {findAllNodes} from "./node-types/ratings/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/ratings/findNodeById"
import type {Rating} from "./node-types/ratings/types/Rating"
import {getNodeTitle} from "./node-types/ratings/getNodeTitle"
import {getNodeSubTitle} from "./node-types/ratings/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/ratings/findConnectedMainImage"
import {findConnectedCarModelVariant} from "./node-types/ratings/findConnectedCarModelVariant"
import {findConnectedMagazineIssue} from "./node-types/ratings/findConnectedMagazineIssue"
import {findConnectedImages} from "./node-types/ratings/findConnectedImages"

export const RatingModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.RATING)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: Rating) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: Rating) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedCarModelVariant(id: number) {
        return findConnectedCarModelVariant(id)
    },

    async getConnectedMagazineIssue(id: number) {
        return findConnectedMagazineIssue(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
