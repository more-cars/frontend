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
                    "selector": "CallExpression[callee.name='assert'][arguments.length<2]",
                    "message": "Avoid assert(value). Provide explicit assertion and message."
                },
                {
                    "selector": "CallExpression[callee.object.name='assert'][callee.property.name!='fail'][arguments.length<3]",
                    "message": "Assertions must include a descriptive error message."
                },
                {
                    "selector": "CallExpression[callee.object.name='assert'][callee.property.name='equal']",
                    "message": "Use assert.strictEqual instead of assert.equal"
                },
                {
                    "selector": "CallExpression[callee.object.name='assert'][callee.property.name='strictEqual'] Literal[value=true]",
                    "message": "Avoid boolean comparisons in assertions. Explain intent."
                },
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ]
        }
    }
)
