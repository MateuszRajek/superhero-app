import axios from 'axios'

export const getHeroLimitedInfo = async (id, apiKey) => {
        const { data: image } = await axios.get(`https://superheroapi.com/api/${apiKey}/${id}/image`);
        const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${apiKey}/${id}/powerstats`);

        return ({
            imageUrl: image.url,
            name: image.name,
            id,
            powerstats,
        })
    }

export const getHeroBySearchedName = (name, apiKey) => {
    return axios.get(`https://superheroapi.com/api/${apiKey}/search/${name}`)
}

export const getFullHeroInfoById = (id, apiKey) => {
    return axios.get(`https://superheroapi.com/api/${apiKey}/${id}`)
}