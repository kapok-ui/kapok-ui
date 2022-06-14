import Vue from 'vue'
import { KapokUIComponent } from './component'

import { KapokPopover } from "./kapok-popover"

/** The version of kapok-ui */
export const version: string

/**
 * Install all Kapok-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(KapokUI)` to install.
 */
export function install (vue: typeof Vue): void

/** KapokUI component common definition */
export type Component = KapokUIComponent

/** Popover Component */
export class Popover extends KapokPopover {}
