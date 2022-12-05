// 登录后不能再访问登录和注册的中间件
export default function ({ store, redirect }) {
    // If the user is authenticated redirect to home page
    if (store.state.user) {
      return redirect('/')
    }
}