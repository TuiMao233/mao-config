// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */

import { Plugin } from 'esbuild'
import chalk from 'chalk'
import logUpdate from 'log-update'
import { version } from '../../../package.json'

export const reporterPlugin = (mode: string): Plugin => {
  const writeLogger = logUpdate.create(process.stderr, { showCursor: true })
  const startTime = Date.now()

  return {
    name: '@hairy/cli:logger',
    setup: ({ onResolve, onStart, onEnd }) => {
      onStart(() => {
        console.log(
          chalk.cyan(`@hairy/cli v${version} ${chalk.green(`building for ${mode}...`)}\n`)
        )
      })
      onEnd(() => {
        if (mode !== 'development') {
          const endTime = (Date.now() - startTime) / 1000
          console.log(chalk.cyan(`sfe-library built in ${chalk.yellow(endTime + 's')}`))
        }
      })
      const texts: string[] = []
      let remaining = 0
      onResolve({ filter: /.*/ }, (options): any => {
        if (texts.length <= 2) {
          texts.push(`transforming ${chalk.magenta(options.path)}`)
        }
        if (texts.length >= 3) {
          texts[3] = `transforming remaining ${chalk.cyan(remaining++)} files...`
        }
        if (texts.length > 0) writeLogger(texts.join('\n') + '\n')
      })
    }
  }
}
