import { MarkerType } from '@vue-flow/core'

/**
 * You can pass elements together as a v-model value
 * or split them up into nodes and edges and pass them to the `nodes` and `edges` props of Vue Flow (or useVueFlow composable)
 */
export const initialElements = [
  { id: '1', type: 'input', label: 'hanshunyao', position: { x: 250, y: 0 }, class: 'light' },
  { id: '2', type: 'output', label: 'han', position: { x: 100, y: 100 }, class: 'light' },
  { id: '3', label: 'shunyao', position: { x: 400, y: 100 }, class: 'light' },
  { id: '4', label: 'shun', position: { x: 150, y: 200 }, class: 'light' },
  { id: '5', type: 'output', label: 'yao', position: { x: 300, y: 300 }, class: 'light' },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  {
    id: 'e1-3',
    label: 'name',
    source: '1',
    target: '3',
    markerEnd: MarkerType.ArrowClosed
  },
  {
    id: 'e4-5',
    type: 'step',
    label: 'last',
    source: '4',
    target: '5',
    style: { stroke: 'orange' },
    labelBgStyle: { fill: 'orange' }
  },
  { id: 'e3-4', type: 'smoothstep', label: 'first', source: '3', target: '4' }
]
