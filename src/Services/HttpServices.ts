import apiClient from "./api-client";

class HttpServices<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getData() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  getById(id: string | number | null) {
    return apiClient.get<T>(this.endpoint + "/" + id);
  }
  postData(data: T) {
    return apiClient.post<T[]>(this.endpoint, data);
  }
  UpdateData(data: T, id: number | null) {
    return apiClient.put(this.endpoint + "/" + id, data);
  }
}
export default HttpServices;
