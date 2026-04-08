import { reactive } from 'vue'
export const uiState = reactive({ loading: false })
let _timer
export function startLoading() {
  if (_timer) clearTimeout(_timer)
  _timer = setTimeout(() => {
    uiState.loading = true
  }, 120)
}
export function stopLoading() {
  if (_timer) {
    clearTimeout(_timer)
    _timer = null
  }
  uiState.loading = false
}
