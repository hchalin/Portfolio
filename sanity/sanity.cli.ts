import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wwsfngdv',
    dataset: 'production',
  },
  // changes the port
  server: {
    hostname: '0.0.0.0', // Listen on all devices
    port: 4444,
  },
})
