import KapokPopover from './kapok-popover'
import KapokDocsButton from './kapok-docs-button'
import KapokDocsDrawer from './kapok-docs-drawer'
import KapokGrid from './kapok-grid'
import KapokInput from './kapok-input'
import KapokOption from './kapok-option'
import KapokSelect from './kapok-select'
import kapokTable from './kapok-table'
import kapokTag from './kapok-tag'
import kapokToolbar from './kapok-toolbar'
import kapokUserCard from './kapok-user-card'
const components = [
  KapokDocsButton,
  KapokDocsDrawer,
  KapokGrid,
  KapokInput,
  KapokOption,
  KapokPopover,
  KapokSelect,
  kapokTable,
  kapokTag,
  kapokToolbar,
  kapokUserCard
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  KapokDocsButton,
  KapokDocsDrawer,
  KapokGrid,
  KapokInput,
  KapokOption,
  KapokPopover,
  KapokSelect,
  kapokTable,
  kapokTag,
  kapokToolbar,
  kapokUserCard
}
