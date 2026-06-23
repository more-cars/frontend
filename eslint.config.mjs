// @ts-check

import eslint from '@eslint/js'
import {defineConfig} from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        rules: {
            "@typescript-eslint/no-duplicate-enum-values": "off",
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "no-restricted-syntax": [
                "error",
                {
                    "selector": "CallExpression[callee.object.name='assert'][callee.property.name=/^(equal|strictEqual|deepEqual|deepStrictEqual)$/][arguments.length<3]",
                    "message": "Assertions must include a descriptive error message"
                }
            ]
        }
    }
)
