import {describe, expect, test} from 'vitest'
import {formatDuration} from '../../../src/views/lib/formatDuration'

describe('Format duration', () => {
    test.each([
        ['PT1H30M', '1 hr, 30 min'],
        ['P1DT2H', '1 day, 2 hr'],
        ['PT45S', '45 sec'],
        ['invalid-duration', 'invalid-duration'],
        ['', ''],
    ])('should format "%s" to "%s"', (input, expected) => {
        expect(formatDuration(input))
            .toBe(expected)
    })
})
