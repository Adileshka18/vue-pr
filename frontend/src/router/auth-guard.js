import store from '../store';

export default function (to, from, next) {
  // Убедимся, что состояние обновлено перед проверкой
  const isAuthenticated = store.getters['user/isUserLoggedIn'];
  console.log('Auth check, isAuthenticated:', isAuthenticated);
  if (!isAuthenticated && to.path !== '/login' && to.path !== '/registration') {
    next('/login?loginError=true');
  } else {
    next();
  }
}