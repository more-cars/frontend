import {findAllNodes} from "./node-types/brands/findAllNodes"
import {findNodeById} from "./node-types/brands/findNodeById"
import {findConnectedCompany} from "./node-types/brands/findConnectedCompany"
import {findConnectedCarModels} from "./node-types/brands/findConnectedCarModels"
import {findConnectedImages} from "./node-types/brands/findConnectedImages"
import {findConnectedMainImage} from "./node-types/brands/findConnectedMainImage"

export const BrandModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedCompany(id: number) {
        return await findConnectedCompany(id)
    },

    async getConnectedCarModels(id: number) {
        return await findConnectedCarModels(id)
    },

    async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    },

    async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)
    },
}
