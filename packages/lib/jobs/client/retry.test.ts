import { describe, expect, it } from 'vitest';

import { getJobRetryDelayMs } from './retry';

describe('getJobRetryDelayMs', () => {
  it('backs off transient-job retries instead of immediately resubmitting them', () => {
    expect(getJobRetryDelayMs(1)).toBe(60_000);
    expect(getJobRetryDelayMs(2)).toBe(5 * 60_000);
    expect(getJobRetryDelayMs(3)).toBe(15 * 60_000);
  });

  it('uses the first delay for invalid retry counts and caps later retries', () => {
    expect(getJobRetryDelayMs(0)).toBe(60_000);
    expect(getJobRetryDelayMs(-1)).toBe(60_000);
    expect(getJobRetryDelayMs(99)).toBe(15 * 60_000);
  });
});
