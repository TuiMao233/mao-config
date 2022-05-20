/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 13:56:26
 * @LastEditTime: 2021-08-10 15:13:26
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { isNumber, isString } from 'lodash-es'
import { LooseNumber } from '../types'

/**
 * 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位
 * @param value 尺寸
 * @param unit 单位
 * @returns string
 */
export const toUnit = (value: LooseNumber, unit = 'px') => {
  const empty = !(isString(value) || isNumber(value))
  if (empty) return ''
  return isString(value) && /\D/g.test(value) ? value : value + unit
}

/** size 转换配置 */
export type toSizeOption = LooseNumber | [LooseNumber, LooseNumber] | { width: LooseNumber; height: LooseNumber }

/**
 * 将 size 转换为宽高
 * @param size { toSizeOption }
 * @returns
 */
export const toSize = (size: toSizeOption, unit?: string) => {
  // 单数值正方形
  if (typeof size === 'string' || typeof size === 'number') {
    return { width: toUnit(size, unit), height: toUnit(size, unit) }
  }
  // 数组形式尺寸
  if (Array.isArray(size)) {
    return { width: toUnit(size[0], unit), height: toUnit(size[1], unit) }
  }
  // 对象形式尺寸
  if (typeof size === 'object') {
    return { width: toUnit(size.width, unit), height: toUnit(size.height, unit) }
  }
  return { width: '', height: '' }
}
