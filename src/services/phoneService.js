export const fetchPhones = async () => {
    try {
      const response = await fetch(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products`, {
        method: 'GET',
        headers: {
          "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
        }
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();
      const uniquePhones = Array.from(new Map(data.map(phone => [phone.id, phone])).values()); // Filtrar teléfonos duplicados
      const limitedPhones = uniquePhones.slice(0, 20); // Limitar a 20 teléfonos
  
      return limitedPhones;
    } catch (error) {
      console.error('Hubo un error al obtener los datos:', error);
      return []; // Si hay error, devolvemos un array vacío
    }
  };

  export const fetchPhoneDetail = async (phoneId) => {
    try {
      const response = await fetch(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${phoneId}`, {
        method: 'GET',
        headers: {
          "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
        }
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los detalles del teléfono');
      }
  
      const phoneDetail = await response.json();
      return phoneDetail;
    } catch (error) {
      console.error('Error al obtener los detalles del teléfono:', error);
      return null; // Devolvemos null si ocurre un error
    }
  };