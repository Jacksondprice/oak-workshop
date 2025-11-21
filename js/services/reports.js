// reports helpers for bus route planner for district transportation

export function reportsStep0(records, limit = 455) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep1(records, limit = 268) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep2(records, limit = 65) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep3(records, limit = 273) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep4(records, limit = 424) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep5(records, limit = 230) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep6(records, limit = 211) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep7(records, limit = 296) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep8(records, limit = 446) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep9(records, limit = 426) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep10(records, limit = 96) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
