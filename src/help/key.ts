import { InjectionKey } from 'vue'
import { Parameter } from '../types/index'
export const key = Symbol() as InjectionKey<Parameter> // 标注类型。
