import { getType } from 'typesafe-actions';

export const asyncState = {
  // 다음 코드는 화살표 함수에 Generic 을 설정 한 것입니다.
  initial: (initialData) => ({
    loading: false,
    data: initialData || null,
    error: null
  }),
  load: (data) => ({
    loading: true,
    data: data || null,
    error: null
  }),
  success: (data) => ({
    loading: false,
    data,
    error: null
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error
  })
};

export function createAsyncReducer(
  asyncActionCreator,
  key
) {
  return (state, action) => {
    // 각 액션 생성함수의 type 을 추출해줍니다.
    const [request, success, failure] = [
      asyncActionCreator.request,
      asyncActionCreator.success,
      asyncActionCreator.failure
    ].map(getType);
    switch (action.type) {
      case request:
        return {
          ...state,
          [key]: asyncState.load()
        };
      case success:
        return {
          ...state,
          [key]: asyncState.success(action.payload)
        };
      case failure:
        return {
          ...state,
          [key]: asyncState.error(action.payload)
        };
      default:
        return state;
    }
  };
}