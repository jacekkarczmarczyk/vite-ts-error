import type { RootState } from '@/store';
import type { Store } from 'vuex';

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

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
