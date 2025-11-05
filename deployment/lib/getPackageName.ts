import {select} from "@inquirer/prompts"

export async function getPackageName(override: string | undefined) {
    if (override && override !== "") {
        return override
    }

    return promptUser()
}

async function promptUser() {
    return select({
        message: 'Which package should be deployed?',
        default: 'frontend',
        choices: [
            {
                value: 'frontend',
            },
            {
                value: 'frontend-rc',
            },
        ],
    })
}
