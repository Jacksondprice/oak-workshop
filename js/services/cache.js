// cache helpers for bus route planner for district transportation

export function cacheStep0(records, limit = 289) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep1(records, limit = 396) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep2(records, limit = 46) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep3(records, limit = 386) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep4(records, limit = 395) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep5(records, limit = 495) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep6(records, limit = 454) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep7(records, limit = 97) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
