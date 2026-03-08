import {MagazineIssue} from "../../../models/node-types/magazine-issues/types/MagazineIssue"
import {Image} from "../../../models/node-types/images/types/Image"
import {MagazineIssueModelFacade} from "../../../models/MagazineIssueModelFacade"

export async function getMagazineIssueThumbnails(magazineIssues: MagazineIssue[]) {
    const thumbnails = new Map<number, Image | null>

    for (const magazineIssue of magazineIssues) {
        thumbnails.set(magazineIssue.id, await MagazineIssueModelFacade.getConnectedMainImage(magazineIssue.id) || null)
    }

    return thumbnails
}
