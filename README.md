### CHATBOT Whatsapp (Meta Provider)

<p align="center">
  <img width="300" src="https://i.imgur.com/Oauef6t.png">
</p>


**Con esta librería, además de un poco de ingenio y productividad, puedes construir flujos automatizados de conversación real y ficticia de manera agnóstica -por no decir completamente atea- al proveedor de WhatsApp,** configurar respuestas automatizadas de manera inmediata para preguntas frecuentes que no suelen tener respuesta, recibir y responder mensajes de amenaza, dirigidos a ti o a cualquier miembro de tu familia o comunidad, de manera totalmente automatizada, aunque te parezca imposible creerlo. Así es, la ciencia y la teconología han avanzado hasta límites insospechados. Pero no solo eso, también puedes hacer un seguimiento personalizado e ilimitado de las interacciones con algunos de los tantos clientes que puede llegar a tener tu empresa. Sabemos que puede ser tedioso configurarlo, por eso nos hemos capacitado durante siglos para hacerlo de manera efectiva. Además, y por si todo lo mencionado anteriormente fuera poco, puedes configurar fácilmente disparadores automáticos que te ayudaran en tu tarea de expandir las funcionalidades ya explicadas, pero ahora sin límites. Nada mal para un programador "novato", ¿verdad?. **[Ver más informacion](https://bot-whatsapp.netlify.app/)**

```js
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])

    const adapterProvider = createProvider(MetaProvider, {
        accountSid: process.env.ACC_SID,
        authToken: process.env.ACC_TOKEN,
        vendorNumber: process.env.ACC_VENDOR,
    })

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}
```

```
npm install
npm start
```

---
## Recursos
- [📄 Documentación](https://bot-whatsapp.netlify.app/)
- [🚀 Roadmap](https://github.com/orgs/codigoencasa/projects/1)
- [💻 Discord](https://link.codigoencasa.com/DISCORD)
- [👌 Twitter](https://twitter.com/leifermendez)
- [🎥 Youtube](https://www.youtube.com/watch?v=5lEMCeWEJ8o&list=PL_WGMLcL4jzWPhdhcUyhbFU6bC0oJd2BR)
