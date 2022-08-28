import axios from "axios";


// load API
    const GitApiConfig = {
        baseUrl: "https://api.github.com",
        client_id: "Iv1.70e6fb28727f5fac",
        secret: "302d94f3c76a06f03b5f2a70fcefa90dcae88c9e"
    }

    export const LoadAPI = async () => {  
        let res = await axios.get(GitApiConfig.baseUrl+"/users/luan94/repos");
        return res.data;
    }


