import { supabase } from '@/lib/supabase';
export async function getBrandVoiceOptions() {
  const tables = [
    "brand_voice_characteristics",
    "content_lengths",
    "writing_styles",
    "vocabulary_levels",
    "tone_of_voices",
    "points_of_view",
  ]

  const options: Record<string, string[]> = {}

  for (const table of tables) {
    const { data, error } = await supabase.from(table).select("name")

    if (error) {
      console.error(`Error fetching data from ${table}:`, error)
      throw error
    }

    options[table] = data.map((item) => item.name)
  }

  return options
}

