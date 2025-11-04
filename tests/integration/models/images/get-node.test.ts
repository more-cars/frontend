import {describe, expect, test, vi} from "vitest"
import {findNodeById} from "../../../../src/models/images/findNodeById"
import {ImageDataFacade} from "../../../../src/data/ImageDataFacade"

describe('Collect node for the IMAGE detail page', () => {
    test('when the IMAGE does not exist', async () => {
        vi.spyOn(ImageDataFacade, 'getNodeById').mockResolvedValue(false)

        expect(await findNodeById(1))
            .toEqual(false)
    })

    test('when the IMAGE exists', async () => {
        const node = {id: 1, name: "dummy 1"}
        vi.spyOn(ImageDataFacade, 'getNodeById').mockResolvedValue(node)

        expect(await findNodeById(1))
            .toEqual(node)
    })
})
