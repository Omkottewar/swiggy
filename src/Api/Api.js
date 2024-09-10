import axios from 'axios'

const Restaurant__BACKEND = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.100706&lng=79.0736323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

const RestaurantMenu__BACKEND = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.100706&lng=79.0736323&restaurantId='



export const ResName =  async()=>{

    try{
        const res = await axios.get(Restaurant__BACKEND);
        return (await res)
    }catch (e){
        console.error(e);
    }
}


export const ResMenu =  async()=>{

    try{
        const res = await axios.get(RestaurantMenu__BACKEND);
        return (res)
    }catch (e){
        console.error(e);
    }
}