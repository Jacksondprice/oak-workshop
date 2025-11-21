// transcripts helpers for bus route planner for district transportation

export function transcriptsStep0(records, limit = 374) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep1(records, limit = 114) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep2(records, limit = 390) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep3(records, limit = 39) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep4(records, limit = 164) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep5(records, limit = 405) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep6(records, limit = 307) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
