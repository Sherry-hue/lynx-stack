/// <reference types="vitest/globals" />

import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

it('should have correct chunk content', async () => {
  const { foo } = await import(/* webpackChunkName: 'test' */ './foo.js');
  const { bar } = await import(/* webpackChunkName: 'test' */ './bar.js');

  expect(foo()).toBe(42);
  expect(bar()).toBe(42);
});

it('should have both foo and bar', async () => {
  const tasmJSONPath = join(__dirname, 'async', 'test', 'tasm.json');
  expect(existsSync(tasmJSONPath));
  const content = await readFile(tasmJSONPath, 'utf-8');

  const { manifest } = JSON.parse(content);
  expect(manifest).toHaveProperty(
    `/async/test.js`,
    expect.stringContaining(['function', 'foo()'].join(' ')),
  );
  expect(manifest).toHaveProperty(
    `/async/test.js`,
    expect.stringContaining(['function', 'bar()'].join(' ')),
  );
});
