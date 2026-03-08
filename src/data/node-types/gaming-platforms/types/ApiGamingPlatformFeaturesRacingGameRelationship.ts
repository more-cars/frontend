import type {ApiRacingGameNode} from "../../racing-games/types/ApiRacingGameNode"

export type ApiGamingPlatformFeaturesRacingGameRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'features-racing-game'
        partner_node: {
            node_type: 'racing-games'
            data: ApiRacingGameNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
