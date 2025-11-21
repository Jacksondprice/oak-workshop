// uploads helpers for bus route planner for district transportation

export function uploadsStep0(records, limit = 60) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep1(records, limit = 60) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep2(records, limit = 11) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep3(records, limit = 169) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep4(records, limit = 310) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep5(records, limit = 70) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep6(records, limit = 298) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
