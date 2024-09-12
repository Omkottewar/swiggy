import axios from "axios";
import React, { useEffect, useState } from "react";

const useResInfo = async ( id ) => {
  console.log('before calling fetch fuction',id)




    try {
      console.log("after calling fetch function", id);
      const data = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.100706&lng=79.0736323&restaurantId=${id}`);
      console.log(data)
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

export default useResInfo;