import axios from "axios"

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (type, sw, ne) => {
    try {
        const {
            data : { data },
        } = await axios.get('https://travel-advisor.p.rapidapi.com/'+ type + '/list-in-boundary', {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
                headers: {
                'X-RapidAPI-Key': '4297f8a46fmshb03fd33e9614615p13856fjsnc4f5939e3d54',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
        });
        return data;
    } catch (error) {
        console.log('Fetch data error : ${error}');
    }
}



