import {describe, expect, test} from 'vitest'
import {formatDateTime} from '../../../src/views/lib/formatDateTime'

describe('Format date time', () => {
    test.each([
        ['2024-05-15T10:30:00Z', 'May 15, 2024, 12:30 PM'],
        ['2024-05-15T12:30:00+02:00', 'May 15, 2024, 12:30 PM'],
        ['invalid-date-time', 'invalid-date-time'],
        ['', ''],
    ])('should format "%s" to "%s"', (input, expected) => {
        expect(formatDateTime(input))
            .toBe(expected)
    })
})
