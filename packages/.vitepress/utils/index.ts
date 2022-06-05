export function replacer(code: string, value: string, key: string, insert: 'head' | 'tail' | 'none' = 'none') {
  const START = `<!--${key}_STARTS-->`
  const END = `<!--${key}_ENDS-->`
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im')

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`

  if (!regex.test(code)) {
    if (insert === 'none') return code
    else if (insert === 'head') return `${target}\n\n${code}`
    return `${code}\n\n${target}`
  }

  return code.replace(regex, target)
}
