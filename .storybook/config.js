import { configure } from '@kadira/storybook'
import '../src/styles.css'


function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../src', true, /stories\.js$/))
}


configure(loadStories, module)
