/*
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
*/
import * as csstree from 'css-tree';

import type { Plugin } from '../types/Plugin.js';

export interface FunctionSpaceName {
  names?: string[];
}

// Sort in alphabetic order please.
const defaultFunctions = [
  'calc',
  'env',
  'fit-content',
  'inset',
  'linear-gradient',
  'radial-gradient',
  'super-ellipse',
  'rgb',
  'rgba',
  'hsl',
  'hsla',
];

export function removeFunctionWhiteSpace(): Plugin {
  const nameMap = Object.fromEntries(
    defaultFunctions.map(functionName => [functionName, true]),
  );

  return {
    name: 'remove-function-whitespace',
    phaseStandard(root) {
      csstree.walk(root, (node) => {
        if (node.type === 'Function' && !nameMap[node.name]) {
          node.children.forEach((node, item, list) => {
            if (node.type === 'WhiteSpace') {
              list.remove(item);
            }
          });
        }
      });
    },
  };
}
