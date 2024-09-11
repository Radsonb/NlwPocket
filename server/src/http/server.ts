import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createGoalRoute } from '../routes/create-goal'
import { createCompletionRoute } from '../routes/create-completion'
import { getPendiongGoalsRoute } from '../routes/get-pending-goals'
import { getWeekSumaryRoute } from '../routes/get-week-summary'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendiongGoalsRoute)
app.register(getWeekSumaryRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
