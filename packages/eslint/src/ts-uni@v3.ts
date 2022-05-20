import { mergeWith, remove } from 'lodash-es'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { uni } from './configs/uni'
import { vue3 } from './configs/vue'
import { mergeCustomizer } from './utils'

const config = mergeWith(basic, vue3, uni, typescript, mergeCustomizer)

remove(config.extends, 'plugin:import/recommended')

export = config
