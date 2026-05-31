import {describe, expect, test} from "vitest"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {supertestGet} from "../../supertestGet"
import {convertStringToApiNodeType} from "../../../_toolbox/convertStringToNodeType"

describe('Requesting a sorted node overview page', () => {
    describe.each(
        getAllExpectedNodeTypes()
    )('$0', async (nodeType) => {
        test('ascending', async () => {
            const response = await supertestGet(`/${convertStringToApiNodeType(nodeType)}?sort_direction=asc`)

            expect(response.statusCode)
                .toBe(200)
        })

        test('descending', async () => {
            const response = await supertestGet(`/${convertStringToApiNodeType(nodeType)}?sort_direction=desc`)

            expect(response.statusCode)
                .toBe(200)
        })

        test('invalid', async () => {
            const response = await supertestGet(`/${convertStringToApiNodeType(nodeType)}?sort_direction=blubb`)

            expect(response.statusCode)
                .toBe(400)
        })
    })
})
