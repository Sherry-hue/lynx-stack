// Copyright 2023 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
export const W3cEventNameToLynx: Record<string, string> = {
  click: 'tap',
  lynxscroll: 'scroll',
  lynxscrollend: 'scrollend',
  overlaytouch: 'touch',
  lynxfocus: 'focus',
  lynxblur: 'blur',
};
export const LynxEventNameToW3cByTagName: Record<
  string,
  Record<string, string>
> = {
  'X-INPUT': {
    'blur': 'lynxblur',
    'focus': 'lynxfocus',
  },
  'X-TEXTAREA': {
    'blur': 'lynxblur',
    'focus': 'lynxfocus',
  },
};

export const LynxEventNameToW3cCommon: Record<string, string> = {
  tap: 'click',
  scroll: 'lynxscroll',
  scrollend: 'lynxscrollend',
  touch: 'overlaytouch',
};
