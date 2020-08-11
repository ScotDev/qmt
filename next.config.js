module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        API_URL: process.env.API_URL
    },
    publicRuntimeConfig: {
        // Will only be available on the client side
        // API_URL: "https://calm-depths-31916.herokuapp.com"
        API_URL: process.env.NEXT_PUBLIC_API_URL
    }
}