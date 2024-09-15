import axios from 'axios'

const Restaurant__BACKEND = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.100706&lng=79.0736323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

const RestaurantMenu__BACKEND = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.100706&lng=79.0736323&restaurantId='

const Res__API = 'https://www.swiggy.com/mapi/restaurants/list/v5?lat=21.100706&lng=79.0736323&collection='


export const ResName =  async()=>{
    try{
        const res = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.100706&lng=79.0736323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // console.log(Restaurant__BACKEND)
        return (res.data)
    }catch (e){
        console.error(e);
    }
}


export const ResMenu =  async(id)=>{

    try{
        const res = await axios.get(RestaurantMenu__BACKEND+id);
        return (res)
    }catch (e){
        console.error(e);
    }
}

 export const fetchRes = async (id)=>{
    try{
        const res = await axios.get(Res__API+id);
        return res
    }catch(e){
        console.log('fetchRes error:', e)
    }
}
