import {describe, expect, test} from "vitest"
import {getNodeTypeInformation} from "../../../../src/controllers/start-page/getNodeTypeInformation"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"

describe('Collecting Node Type information', () => {
    test('data is correctly assembled', async () => {
        const nodeInformation = getNodeTypeInformation(DataNodeType.CAR_MODEL, '🗿', 1234)

        expect(nodeInformation)
            .toEqual({
                name: 'car-model',
                label: 'Car Models',
                overview_page_path: '/car-models',
                icon: '🗿',
                count: 1234,
            })
    })
})
