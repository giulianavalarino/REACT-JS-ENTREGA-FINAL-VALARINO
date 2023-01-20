import axios from "axios";

export const baseUrl = "https://63a9af4d7d7edb3ae614e2fa.mockapi.io/";

export const API_Endpoints = {
    ITEMS: "/Items"
};
export const API_Verbos = {
    POST: "POST",
    GET: "GET",
    DELETE: "DELETE",
    PUT: "PUT"
};

export async function consultaApi(endPoint, verbo, objeto = {}) {

    try {
        if (verbo == API_Verbos.DELETE) {
            const response = await axios.delete(`${baseUrl}${endPoint}/${objeto.id}`);
            return response;
        } else {
            const response = await axios({
                url: `${baseUrl}${endPoint}`,
                method: verbo,
                data: objeto,
            });
            return response;
        }
    } catch (e) {
        console.log(e)
    }
}