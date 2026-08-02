export const supabaseFetch = async (table, data) => {
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${table}`;
  return await fetch(url, {
    method: 'POST',
    headers: {
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(data)
  });
};