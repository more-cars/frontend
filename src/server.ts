import {app} from "./app.ts"

const PORT = 3001

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
