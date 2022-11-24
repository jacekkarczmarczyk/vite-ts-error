import type { RootState } from '@/store';
import type { Store } from 'vuex';
// import { Component } from 'vue';

// declare module '*.vue' {
//   export default Component<any, any, any, any, Record<string, unknown>>;
// }

declare module 'vue/types/vue' {
  interface Vue {
    _uid: number;
    $auth: AuthService;
    $store: Store<RootState>;
    $route: Route;
    $translate: (key: string, params?: Record<string, string>) => string;
    $timeout: (handler: TimerHandler) => void;
  }
}
