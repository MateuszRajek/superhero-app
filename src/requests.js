import axios from 'axios'

const APIToken = 3110661399003594

// export const getHeroById = id => {
//     return axios.get(`https://superheroapi.com/api/${APIToken}/${id}`)
// }

export const getHeroLimitedInfo = async id => {
    const { data: image } = await axios.get(`https://superheroapi.com/api/${APIToken}/${id}/image`);
    console.log(image)

    return (
        {
            imageUrl: image.url,
            name: image.name,
            id
        }

    )

}

// export const getHeroByName = name => {
//     return axios.get(`https://superheroapi.com/api/${APIToken}/search/${name}`)
// }