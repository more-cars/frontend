import Ajv from "ajv"

export function validateJson(data: any, validationSchema: any): boolean {
    const ajv = new Ajv.default({allErrors: true})
    const validate = ajv.compile(validationSchema)
    const valid = validate(data)
    if (!valid) {
        console.log(validate.errors)
        console.log(data)
    }

    return valid
}
