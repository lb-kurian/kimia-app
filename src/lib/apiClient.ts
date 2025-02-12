interface ApiOptions {
    method: "GET" | "POST" | "PUT" | "DELETE"
    endpoint: string
    body?: object | FormData
    headers?: Record<string, string>
  }
  
  export async function callApi({ method, endpoint, body, headers = {} }: ApiOptions) {
    try {
      const defaultHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        ...headers,
      }
  
      if (body instanceof FormData) {
        delete defaultHeaders["Content-Type"]
      }
  
      const response = await fetch(endpoint, {
        method,
        headers: defaultHeaders,
        body: body instanceof FormData ? body : JSON.stringify(body),
      })
  
      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error("API call error:", error)
      throw error
    }
  }
  
  export async function getApi(endpoint: string, headers?: Record<string, string>) {
    return callApi({ method: "GET", endpoint, headers })
  }
  
  export async function postApi(endpoint: string, body: object | FormData, headers?: Record<string, string>) {
    return callApi({ method: "POST", endpoint, body, headers })
  }
  
  export async function putApi(endpoint: string, body: object, headers?: Record<string, string>) {
    return callApi({ method: "PUT", endpoint, body, headers })
  }
  
  export async function deleteApi(endpoint: string, body?: object, headers?: Record<string, string>) {
    return callApi({ method: "DELETE", endpoint, body, headers })
  }
  
  