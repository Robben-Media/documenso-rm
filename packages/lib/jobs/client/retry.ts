const JOB_RETRY_DELAYS_MS = [60_000, 5 * 60_000, 15 * 60_000] as const;

/**
 * Returns a bounded delay for retrying a transient background-job failure.
 *
 * The local job client previously re-submitted retries immediately. That can
 * exhaust the retry budget when an SMTP provider returns a temporary 421.
 */
export const getJobRetryDelayMs = (retryAttempt: number) => {
  const normalizedRetryAttempt = Math.max(1, Math.floor(retryAttempt));
  const delayIndex = Math.min(normalizedRetryAttempt - 1, JOB_RETRY_DELAYS_MS.length - 1);

  return JOB_RETRY_DELAYS_MS[delayIndex];
};
