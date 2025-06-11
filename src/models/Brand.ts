import {BrandNode} from "../types/brands/BrandNode"

export class Brand {
    static findById(id: number): BrandNode {
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
