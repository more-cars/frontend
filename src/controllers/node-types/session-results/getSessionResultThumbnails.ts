import {SessionResult} from "../../../models/node-types/session-results/types/SessionResult"
import {Image} from "../../../models/node-types/images/types/Image"
import {SessionResultModelFacade} from "../../../models/SessionResultModelFacade"

export async function getSessionResultThumbnails(sessionResults: SessionResult[]) {
    const thumbnails = new Map<number, Image | null>

    for (const sessionResult of sessionResults) {
        thumbnails.set(sessionResult.fields.id, await SessionResultModelFacade.getConnectedMainImage(sessionResult.fields.id) || null)
    }

    return thumbnails
}
