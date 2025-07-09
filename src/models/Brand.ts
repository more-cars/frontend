import type {BrandNode} from "../types/brands/BrandNode.mts"
import {getBrandById} from "../data/brands/getBrandById.ts"
import {getAllBrands} from "../data/brands/getAllBrands.ts"

export class Brand {
    static async findById(id: number): Promise<false | BrandNode> {
        const brand = await getBrandById(id)

        if (!brand) {
            return false
        }
        
        return brand
    }

    static async findAll(): Promise<Array<BrandNode>> {
        const brands = await getAllBrands()

        if (!brands) {
            return []
        }

        return brands
    }
}
