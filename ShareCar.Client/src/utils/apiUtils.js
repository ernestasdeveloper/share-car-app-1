// @flow

type ReqMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const fetchData =
    <T, K>(method: ReqMethod, url: string, payload?: T): Promise<ApiResponse<K>> => {
        const headers: {[key: string]: string} = {};
        headers["accept"] = "application/json";
        if (method !== "GET") {
            headers["content-type"] = "application/json";
        }
        const config = {
            method: method,
            body: JSON.stringify(payload),
            headers: new Headers(headers),
            credentials: "include"
        };
        return fetch(url, config)
            .then(r => r.text())
            .then(r => {
                if (r.length === 0) {
                    return (("": any): K);
                }
                return ((JSON.parse(r): any): K);
            })
            .then(r => ({
                isError: false,
                value: r
            }))
            .catch(r => ({
                isError: true,
                value: {
                    code: r.status,
                    text: r.statusText
                }
            }));
    }