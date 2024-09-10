import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useResInfo = (id) => {
    const [menu, setMenu] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.100706&lng=79.0736323&restaurantId=${id}`);
            setMenu(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]); 

    return menu;
};

export default useResInfo;