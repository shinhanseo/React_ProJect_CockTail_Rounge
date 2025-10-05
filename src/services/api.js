// API 기본 설정
const API_BASE_URL = 'http://localhost:4000/api';

// 공통 fetch 함수
async function apiRequest(endpoint, options = {}) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// 바 관련 API
export const barsAPI = {
  // 바 목록 조회 (도시별 필터링, 검색, 페이지네이션)
  getBars: (params = {}) => {
    const searchParams = new URLSearchParams();
    
    if (params.city) searchParams.append('city', params.city);
    if (params.q) searchParams.append('q', params.q);
    if (params.page) searchParams.append('page', params.page);
    if (params.size) searchParams.append('size', params.size);
    
    const queryString = searchParams.toString();
    return apiRequest(`/bars${queryString ? `?${queryString}` : ''}`);
  },

  // 특정 바 상세 정보
  getBar: (id) => apiRequest(`/bars/${id}`),
};

// 도시 관련 API
export const citysAPI = {
  // 도시 목록 조회
  getCitys: () => apiRequest('/citys'),
  
  // 특정 도시 정보
  getCity: (id) => apiRequest(`/citys/${id}`),
};

// 칵테일 관련 API
export const cocktailsAPI = {
  // 칵테일 목록 조회
  getCocktails: (params = {}) => {
    const searchParams = new URLSearchParams();
    
    if (params.q) searchParams.append('q', params.q);
    if (params.page) searchParams.append('page', params.page);
    if (params.size) searchParams.append('size', params.size);
    
    const queryString = searchParams.toString();
    return apiRequest(`/cocktails${queryString ? `?${queryString}` : ''}`);
  },

  // 특정 칵테일 상세 정보
  getCocktail: (id) => apiRequest(`/cocktails/${id}`),
};

// 커뮤니티 게시글 관련 API
export const postsAPI = {
  // 게시글 목록 조회
  getPosts: (params = {}) => {
    const searchParams = new URLSearchParams();
    
    if (params.q) searchParams.append('q', params.q);
    if (params.page) searchParams.append('page', params.page);
    if (params.size) searchParams.append('size', params.size);
    
    const queryString = searchParams.toString();
    return apiRequest(`/posts${queryString ? `?${queryString}` : ''}`);
  },

  // 특정 게시글 상세 정보
  getPost: (id) => apiRequest(`/posts/${id}`),
};

// 헬스체크
export const healthCheck = () => apiRequest('/healthz');
