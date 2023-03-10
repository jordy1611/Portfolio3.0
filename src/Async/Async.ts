export const sendFormEmail = async () => {
  const header = {
    method: 'POST',
  }
  const body = {
    service_id: 'service_ii1v4jq',
    template_id: 'template_hwbbzff',
    user_id: 'STjwCm_WQ8vqGOq2j',
    template_params: {
      'from_name': 'TEST FROM NAME',
      'from_email': 'test@test.com',
      'message': 'please work'
    }
  }
  const result = await fetch('https://api.emailjs.com/api/v1.0/email/send',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(body)
    }

  )
}