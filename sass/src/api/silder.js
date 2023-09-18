import request from "../utils/request";

export const getSilders = () => {
    return request.get('api/slider/getSliders')
}