import {ordinalize} from "inflection"

export function ordinalizeNumber(number: number) {
    return ordinalize(String(number))
}
