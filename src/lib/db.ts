import { supabase } from './supabase'

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('name')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateUserProfile(userId: string, name: string) {
  const { error } = await supabase
    .from('user_profiles')
    .upsert({ id: userId, name })

  if (error) throw error
}
