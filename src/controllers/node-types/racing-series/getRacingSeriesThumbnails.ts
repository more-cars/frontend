import {RacingSeries} from "../../../models/node-types/racing-series/types/RacingSeries"
import {Image} from "../../../models/node-types/images/types/Image"
import {RacingSeriesModelFacade} from "../../../models/RacingSeriesModelFacade"

export async function getRacingSeriesThumbnails(racingSerieses: RacingSeries[]) {
    const thumbnails = new Map<number, Image | null>

    for (const racingSeries of racingSerieses) {
        thumbnails.set(racingSeries.id, await RacingSeriesModelFacade.getConnectedMainImage(racingSeries.id) || null)
    }

    return thumbnails
}
