export const apiClient = {
  baseURL: import.meta.env.VITE_API_URL || '/api',
  
  async request(method, endpoint, data = null) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token') || ''}`
      }
    }
    
    if (data) {
      options.body = JSON.stringify(data)
    }
    
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, options)
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  },
  
  get(endpoint) {
    return this.request('GET', endpoint)
  },
  
  post(endpoint, data) {
    return this.request('POST', endpoint, data)
  },
  
  put(endpoint, data) {
    return this.request('PUT', endpoint, data)
  },
  
  delete(endpoint) {
    return this.request('DELETE', endpoint)
  }
}