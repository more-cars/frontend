import {describe, expect, test} from 'vitest'
import {formatDate} from "../../../src/views/lib/formatDate"

describe('Format date', () => {
    test.each([
        ['2024-05-15', 'May 15, 2024'],
        ['2026-06-15', 'Jun 15, 2026'],
        ['invalid-date', 'invalid-date'],
        ['', ''],
        ['2024-13-45', '2024-13-45'], // Invalid date
    ])('should format "%s" to "%s"', (input, expected) => {
        expect(formatDate(input))
            .toBe(expected)
    })
})
