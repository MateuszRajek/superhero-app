import axios from 'axios'

const APIToken = sessionStorage.getItem('accessToken') 

export const getHeroLimitedInfo = async id => {
        const { data: image } = await axios.get(`https://superheroapi.com/api/${APIToken}/${id}/image`);
        const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${APIToken}/${id}/powerstats`);

        return ({
            imageUrl: image.url,
            name: image.name,
            id,
            powerstats,
        })
    }

export const getHeroBySearchedName = name => {
    return axios.get(`https://superheroapi.com/api/${APIToken}/search/${name}`)
}

export const getFullHeroInfoById = id => {
    return axios.get(`https://superheroapi.com/api/${APIToken}/${id}`)
}