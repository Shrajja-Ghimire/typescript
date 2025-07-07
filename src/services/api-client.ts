import axios from "axios";

export default axios.create ({
    baseURL:"https://api.themoviedb.org/3",
    params:{
  api_key:"0c126a888442abafd2fdddf3cf986cf2",
    },
  

});