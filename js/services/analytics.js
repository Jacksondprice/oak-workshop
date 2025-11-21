// analytics helpers for bus route planner for district transportation

export function analyticsStep0(records, limit = 464) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep1(records, limit = 449) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep2(records, limit = 494) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep3(records, limit = 55) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep4(records, limit = 475) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep5(records, limit = 70) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep6(records, limit = 139) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
