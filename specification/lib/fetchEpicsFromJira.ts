import axios from "axios"
import {getJiraApiBaseUrl} from "./getJiraApiBaseUrl.ts"
import {obtainJiraApiToken} from "./obtainJiraApiToken.ts"
import type {RawEpic} from "./Types/RawEpic.ts"

export async function fetchEpicsFromJira(): Promise<false | Array<RawEpic>> {
    try {
        const response = await axios
            .post(getJiraApiBaseUrl() + 'search/jql', {
                "jql": "project = MCF AND issuetype = Epic AND status = 'In Progress'",
                "fields": [
                    "summary",
                    "description",
                    "created",
                    "updated",
                ],
            }, {
                headers: {
                    'Authorization': `Basic ${obtainJiraApiToken()}`,
                    'Content-Type': 'application/json',
                }
            })
        return response.data.issues
    } catch (error) {
        console.log(error)
        console.error(`Error: ${error.code} - ${error}`)
    }

    return false
}
