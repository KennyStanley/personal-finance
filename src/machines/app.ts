import { createMachine } from 'xstate'

export const appMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0AbA9siAlgHZQDEEORYGxAbjgNbVqa77FQJ04DGyALgUoBtAAwBdRKFQ5YBQZSkgAHogDMAJg0YAbAFYAjAdE61AFh0B2URoMAaEAE9EATgAcGN2u9rResy4ulkZ6AL6hDizYeIQkpGAATgk4CRioWAIAZikAthhRbLGc3HwKRGKSSCAycmVKqgguehgaei5aLjoabp3uGg7OCBqaGGpebgYuBgFqk5Ya4ZHoGInJCaQAMgDyAIIAIko18kJE9YgAtPotlmNtlpZ6bqJmBpYDrh5ePn4BQSHhERARBwEDgSgKMQ4h1kx0UVQaljMGDMoksVkmomeZksbjM7wQOh0nh8Y2sBg0FlELkWIAh+Eg0NqJzOCH8BlGj0JmJu-jMenx7VGJICwzcGh0NKiqxSjNhp3hFzcRMJZgChmmmP0eKciC0zTc42GemGrz5EsBLFldQVCHORlEuh0qqaRhRJn8+MuGAMhP0PQMvmmLhMANCQA */
  createMachine(
    {
      id: 'app',
      tsTypes: {} as import('./app.typegen').Typegen0,
      schema: {
        services: {} as {
          loadData: {
            data: { message: string }
          }
        },
      },
      context: {
        errorMessage: undefined as string | undefined,
      },
      initial: 'loading',
      states: {
        loading: {
          entry: ['log'],
          invoke: {
            src: 'loadData',
            onDone: [
              {
                target: 'loaded',
              },
            ],
            onError: [
              {
                target: 'error',
              },
            ],
          },
        },
        loaded: {
          on: {
            CLICK: {
              actions: ['log'],
            },
          },
        },
        error: {
          on: {
            LOAD: {
              target: 'loading',
            },
          },
        },
      },
    },
    {
      actions: {
        log: (context, event) => {
          console.log(context, event)
        },
      },
      services: {
        loadData: async () => {
          return {
            message: 'Hello World',
          }
        },
      },
    },
  )
