import App from './api'

App.start((err: string) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${App.info.uri}`)
})