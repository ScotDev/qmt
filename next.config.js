module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        API_URL: process.env.API_URL
    },
    publicRuntimeConfig: {
        // Will only be available on the client side
        // Prod API
        API_URL: process.env.NEXT_PUBLIC_API_URL
        // Dev API
        // API_URL: process.env.API_URL
    }
}