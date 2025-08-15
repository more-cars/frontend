import fs from "fs"
import {expect, test} from "vitest"
import {createMarkdownForEpic} from "../../../specification/lib/createMarkdownForEpic.ts"

test('Rendering epic data in markdown format', async () => {
    const expectedEpic = fs.readFileSync(__dirname + '/../../_toolbox/fixtures/epic.md', {
        encoding: 'utf8',
        flag: 'r'
    })
    const epicData = require("../../_toolbox/fixtures/epicData.json")

    const markdown = createMarkdownForEpic(epicData)

    expect(markdown)
        .toEqual(expectedEpic)
})
