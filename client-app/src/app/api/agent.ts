import axious, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axious.defaults.baseURL = 'http://localhost:5000/api';

axious.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url:string) => axious.get<T>(url).then(responseBody),
    post: <T>(url:string, body: {}) => axious.post<T>(url, body).then(responseBody),
    put: <T>(url:string, body: {}) => axious.put<T>(url, body).then(responseBody),
    del: <T>(url:string) => axious.delete<T>(url).then(responseBody),
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => axious.post<void>('/activities', activity),
    update: (activity: Activity) => axious.put<void>(`/activities/${activity.id}`,activity),
    delete: (id: string) => axious.delete<void>(`/activities/${id}`)
}

const agent ={
    Activities
}

 export default agent;

