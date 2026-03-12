import { ref } from 'vue';

const globalSnackbar = ref({
  show: false,
  text: '',
  color: 'success' as 'success' | 'error' | 'info' | 'warning'
});

export function usePopup() {
  const showMessage = (message: string, color: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    globalSnackbar.value = {
      show: true,
      text: message,
      color
    };
  };

  const hideMessage = () => {
    globalSnackbar.value.show = false;
  };

  return {
    snackbar: globalSnackbar,
    showMessage,
    hideMessage
  };
}