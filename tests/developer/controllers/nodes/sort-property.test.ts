import {describe, expect, test} from "vitest"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {supertestGet} from "../../supertestGet"
import {convertStringToApiNodeType, convertStringToControllerNodeType} from "../../../_toolbox/convertStringToNodeType"
import {getNodeProperties} from "../../../../src/specification/getNodeProperties"

describe('Requesting a sorted node overview page', () => {
    describe.each(
        getAllExpectedNodeTypes()
    )('$0', async (nodeType) => {
        test('valid property', async () => {
            const properties = getNodeProperties(convertStringToControllerNodeType(nodeType))
            const response = await supertestGet(`/${convertStringToApiNodeType(nodeType)}?sort_by_property=${properties[0].name}`)

            expect(response.statusCode)
                .toBe(200)
        })

        test('invalid property', async () => {
            const response = await supertestGet(`/${convertStringToApiNodeType(nodeType)}?sort_by_property=blubb`)

            expect(response.statusCode)
                .toBe(400)
        })
    })
})
