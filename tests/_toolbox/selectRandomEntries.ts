export function selectRandomEntries(list: Array<any>, amount: number) {
    let randomEntries = []

    for (let i = 0; i < amount; i++) {
        const randomNumber = list[getRandomInt(0, list.length)]
        randomEntries.push(randomNumber)
    }

    return randomEntries
}

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}
