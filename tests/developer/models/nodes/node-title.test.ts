import {describe, expect, test} from "vitest"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {convertStringToModelNodeType} from "../../../_toolbox/convertStringToNodeType"
import {getNodeTitle} from "../../../../src/models/getNodeTitle"
import type {ModelNode} from "../../../../src/models/types/ModelNode"

describe('Node Title', () => {
    test.each(
        getAllExpectedNodeTypes()
    )('$0', async (nodeType) => {
        const data = {
            type: convertStringToModelNodeType(nodeType),
            fields: {
                name: 'dummy',
                title: 'dummy',
                driver_name: 'dummy',
                position: 1,
                currency_code: 'EUR',
                rating_value: 93,
            }
        }

        const nodeTitle = getNodeTitle(data as unknown as ModelNode)

        expect(typeof nodeTitle)
            .toBe('string')

        expect(nodeTitle)
            .not.toBe('')
    })
})
