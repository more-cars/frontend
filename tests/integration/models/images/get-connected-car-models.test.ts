import {describe, expect, test, vi} from "vitest"
import {ImageDataFacade} from "../../../../src/data/ImageDataFacade"
import {findConnectedCarModels} from "../../../../src/models/images/findConnectedCarModels"

describe('Collect connected CAR MODELS for the IMAGE detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(ImageDataFacade, 'getConnectedNodes').mockResolvedValue(false)

        expect(await findConnectedCarModels(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(ImageDataFacade, 'getConnectedNodes').mockResolvedValue([
            {
                data: {
                    relationship_id: 2,
                    relationship_name: "dummy 1",
                    relationship_partner: {
                        node_type: 'car model',
                    },
                },
            },
            {
                data: {
                    relationship_id: 3,
                    relationship_name: "dummy 2",
                    relationship_partner: {
                        node_type: 'brand'
                    },
                },
            },
        ])

        expect(await findConnectedCarModels(1))
            .toHaveLength(1)
    })
})
