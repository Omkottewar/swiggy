import axios from "axios";
import React, { useEffect, useState } from "react";

const useResInfo = (id) => {
  const [menu, setMenu] = useState();

  const fetchData = async () => {
    const data = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.100706&lng=79.0736323&restaurantId=${757874}`);
    console.log('hello');
    setMenu(data);
    return menu;
  };
  useEffect(() => {
    fetchData();
  }, []);
};

export default useResInfo;