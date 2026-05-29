import {ApiNodeType} from "../../types/ApiNodeType"

export type ApiNodeHasPrimeImageRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.IMAGE
        id: number
        attributes: {
            start_node_id: number
            [key: string]: string | number | boolean | null
        }
        data: {
            start_node: {
                data: {
                    id: number
                }
            }
        }
    }[]
}
