import axios from "axios"
import {getXrayGraphqlUrl} from "./getXrayGraphqlUrl.ts"
import {obtainXrayApiToken} from "./obtainXrayApiToken.ts"
import {loadGraphqlQuery} from "./loadGraphqlQuery.ts"

export async function fetchRawScenariosFromXray() {
    try {
        const response = await axios
            .post(getXrayGraphqlUrl(), {
                query: loadGraphqlQuery('getScenarios.gql')
            }, {
                headers: {
                    'Authorization': `Bearer ${await obtainXrayApiToken()}`
                }
            })
        return response.data.data
    } catch (e) {
        console.error(`Error: ${e}`)
    }

    return false
}
