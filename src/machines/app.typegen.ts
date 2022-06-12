// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  eventsCausingActions: {
    log: 'CLICK' | 'LOAD'
  }
  internalEvents: {
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    loadData: 'done.invoke.app.loading:invocation[0]'
  }
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingServices: {
    loadData: 'LOAD'
  }
  eventsCausingGuards: {}
  eventsCausingDelays: {}
  matchesStates: 'loading' | 'loaded' | 'error'
  tags: never
}
