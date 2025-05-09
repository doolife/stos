const express = require('express')
const { loadNuxt, build } = require('nuxt')
const app = express()

const isDev = process.env.NODE_ENV !== 'production'

async function start() {
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    app.use(nuxt.render)

    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`✅ 서버 실행됨: http://localhost:${port}`)
    })
}

start()
