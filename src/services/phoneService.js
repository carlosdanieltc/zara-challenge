// const fetchPhones = async () => {
//     try {
//       const response = await fetch(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products`, {
//         method: 'GET',
//         headers: {
//           "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Error en la respuesta de la API');
//       }

//       const data = await response.json();

//       const uniquePhones = Array.from(new Map(data.map(phone => [phone.id, phone])).values()); // Filtrado de Móviles duplicados
//       const limitedPhones = uniquePhones.slice(0, 20); // Limitamos a 20 resultados

//       setAllPhones(limitedPhones); // Guardamos los teléfonos completos
//       setPhones(limitedPhones); // Establecemos inicialmente los teléfonos limitados
//       console.log(limitedPhones)
//     } catch (error) {
//       console.error('Hubo un error al obtener los datos:', error);
//     }
//   };