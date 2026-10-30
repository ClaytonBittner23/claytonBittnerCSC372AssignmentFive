//Removes HTML tags from a string
export function cleanSummary(summary) {
  if (!summary) {
    return 'No summary available.'
  }

  return summary.replace(/<[^>]*>/g, '')
}

//Provides fallback text when information is missing
export function getDisplayValue(value) {
  return value || 'Not available'
}
