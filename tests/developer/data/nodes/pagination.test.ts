import {describe, expect, test} from "vitest"
import {getApiRequestUrl} from "../../../../src/data/lib/getApiRequestUrl"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {convertStringToApiNodeType, convertStringToDataNodeType} from "../../../_toolbox/convertStringToNodeType"

describe('Assembling API URL with pagination information', () => {
    describe.each(
        getAllExpectedNodeTypes()
    )('for $0', async (nodeType) => {
        test.each([
            [undefined, 1],
            [NaN, 1],
            [-2, 1],
            [-1, 1],
            [0, 1],
            [1, 1],
            [2, 2],
            [111_222_333, 111_222_333],
        ])('for page = $0', async (pageIn, pageOut) => {
            const url = getApiRequestUrl(convertStringToDataNodeType(nodeType), {page: pageIn})

            expect(url)
                .to.equal(`/${convertStringToApiNodeType(nodeType)}?sort_by_property=name&sort_direction=asc&page=${pageOut}`)
        })
    })
})
