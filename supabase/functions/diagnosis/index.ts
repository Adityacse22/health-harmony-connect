
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { responses } = await req.json()

    // Construct a prompt for the AI model
    const prompt = `
      Based on the following patient information, provide a preliminary assessment. 
      Remember to be cautious and always recommend consulting a healthcare professional.
      
      Symptoms: ${responses.symptoms}
      Duration: ${responses.duration}
      Severity (1-10): ${responses.severity}
      Medical History: ${responses.history}
      
      Please provide:
      1. Possible conditions to discuss with a doctor
      2. General recommendations
      3. When to seek immediate medical attention
    `

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a medical AI assistant. Always be cautious and emphasize the importance of consulting healthcare professionals. Never provide definitive diagnoses.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
      }),
    })

    const data = await response.json()
    const diagnosis = data.choices[0].message.content

    return new Response(
      JSON.stringify({ diagnosis }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})
