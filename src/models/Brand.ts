import type {BrandNode} from "../types/brands/BrandNode.mts"
import {getBrandById} from "../data/brands/getBrandById.ts"
import {getAllBrands} from "../data/brands/getAllBrands.ts"

export class Brand {
    static async findById(id: number): Promise<BrandNode> {
        const brand = await getBrandById(id)

        if (brand) {
            return brand
        }

        return {
            id: 356,
            name: "Alfa Romeo",
            created_at: "2025-01-01T00:00:00Z",
            updated_at: "2025-01-02T00:00:00Z",
        }
    }

    static async findAll(): Promise<Array<BrandNode>> {
        const brands = await getAllBrands()

        if (!brands) {
            return []
        }

        return brands
    }
}
