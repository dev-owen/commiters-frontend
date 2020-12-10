import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getCurrentUser() {
    return authRquest({
        url: API_BASE_URL + "/api/user/me",
        method: 'GET'
    });
}

export function getCurrentGithubInfo() {
    return authRquest({
        url: API_BASE_URL + "/api/github/me",
        method: 'GET'
    });
}
