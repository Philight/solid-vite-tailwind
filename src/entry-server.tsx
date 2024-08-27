// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

// export default createHandler(renderAsync((event) => <StartServer event={event} />))

export default createHandler(() => <StartServer />, {
  mode: 'async',
})
