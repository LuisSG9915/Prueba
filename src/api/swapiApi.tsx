import React from 'react'
import axios from 'axios'

const URI = "https://swapi.dev/api/"
const swapiApi = axios.create({
    baseURL: URI
})

export default swapiApi