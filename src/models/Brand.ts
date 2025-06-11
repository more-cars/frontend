import {BrandNode} from "../types/brands/BrandNode"
import {getBrandById} from "../data/brands/getBrandById"

export class Brand {
    static async findById(id: number): Promise<BrandNode> {
        const brand = await getBrandById(0)

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

    static findAll(): Array<BrandNode> {
        return [
            {
                id: 356,
                name: "Alfa Romeo",
                created_at: "2025-01-01T00:00:00Z",
                updated_at: "2025-01-02T00:00:00Z",
            },
            {
                id: 324,
                name: "Bentley",
                created_at: "2025-01-01T00:00:00Z",
                updated_at: "2025-01-02T00:00:00Z",
            },
            {
                id: 341,
                name: "Chevrolet",
                created_at: "2025-01-01T00:00:00Z",
                updated_at: "2025-01-02T00:00:00Z",
            }
        ]
    }
}
