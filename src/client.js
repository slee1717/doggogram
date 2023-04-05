import { createClient } from '@supabase/supabase-js'

const URL = 'https://ojqocmlxikfpxnxwianv.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qcW9jbWx4aWtmcHhueHdpYW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY4MDMsImV4cCI6MTk5NjIzMjgwM30.s31csCnEEpZu8_RluHetwAwDU35bhAFkT1UCTwfn6XU';


export const supabase = createClient(URL, API_KEY);