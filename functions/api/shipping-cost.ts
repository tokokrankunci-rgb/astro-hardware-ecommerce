export interface Env {
  RAJAONGKIR_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const requestData = await context.request.json() as {
      origin: string;
      destination: string;
      weight: number;
      courier: string;
    };

    const apiKey = context.env.RAJAONGKIR_API_KEY;

    // Call RajaOngkir Pro API
    const response = await fetch('https://pro.rajaongkir.com/api/cost', {
      method: 'POST',
      headers: {
        'key': apiKey,
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        origin: requestData.origin,
        destination: requestData.destination,
        weight: requestData.weight.toString(),
        courier: requestData.courier // e.g., 'jtr', 'sentral', 'dakota'
      })
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Gagal memproses ongkir kargo' }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
};