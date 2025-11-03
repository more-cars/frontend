import axios from "axios"
import {getXrayGraphqlUrl} from "./getXrayGraphqlUrl"
import {obtainXrayApiToken} from "./obtainXrayApiToken"
import {loadGraphqlQuery} from "./loadGraphqlQuery"

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
