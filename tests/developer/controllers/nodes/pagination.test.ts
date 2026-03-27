import {describe, expect, test} from "vitest"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {supertestGet} from "../../supertestGet"
import {convertStringToApiNodeType} from "../../../_toolbox/convertStringToNodeType"

/**
 * The page parameter is not validated.
 * It can have any value.
 * Invalid values are internally converted to "page=1".
 */
describe('Requesting a paginated node overview page', () => {
    describe.each(
        getAllExpectedNodeTypes()
    )('$0', async (nodeType) => {
        test.each([
            [-13.4],
            [-1],
            [-0],
            [0],
            [1],
            [100],
            ['z'],
        ])('page = $0', async (page) => {
            const response = await supertestGet(`/${convertStringToApiNodeType(nodeType)}?page=${page}`)

            expect(response.statusCode)
                .toBe(200)
        })
    })
})
