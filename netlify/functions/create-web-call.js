exports.handler = async () => {
  try {
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ agent_id: process.env.AGENT_ID })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_token: data.access_token })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed" })
    };
  }
};
