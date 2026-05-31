import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedMagazineIssue} from "../../../../../src/models/node-types/lap-times/findConnectedMagazineIssue"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {LapTimeDocumentedInMagazineIssueRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeDocumentedInMagazineIssueRelationship"

describe('Collect connected MAGAZINE ISSUE for the LAP TIME detail page', () => {
    test('when no MAGAZINE ISSUE is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedMagazineIssueNode').mockResolvedValue(null)

        expect(await findConnectedMagazineIssue(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE connected', async () => {
        const data = {partner_node: {id: 11111118, name: "dummy", partner_node: FakeMagazineIssue.data}} as unknown as LapTimeDocumentedInMagazineIssueRelationship

        vi.spyOn(LapTimeDataFacade, 'getConnectedMagazineIssueNode').mockResolvedValue(data)

        expect(await findConnectedMagazineIssue(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
