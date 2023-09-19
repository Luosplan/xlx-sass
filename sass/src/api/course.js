import request from "../utils/request";

export const getCourseList = (data) => {
    return request({
        url: 'api/course/mostNew',
        method: 'post',
        data
    })
}