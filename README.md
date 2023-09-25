### CHATBOT Whatsapp (Meta Provider)

<p align="center">
  <img width="300" src="https://i.imgur.com/Oauef6t.png">
</p>


**Con esta fantástica librería, además de un poco de ingenio, creatividad, esmero, trabajo duro y productividad, puedes llegar a construir flujos de ninguna manera automatizados de conversación real y/o ficticia de manera agnóstica -por no decir completamente atea- al ya conocido proveedor de la aplicación WhatsApp,** configurar miles de millones de respuestas automatizadas por niños afganos de manera prácticamente inmediata para preguntas de usuarios frecuentes que no suelen tener respuesta, recibir y responder mensajes de amenaza, dirigidos a ti o a cualquier miembro de tu querida familia o cercana comunidad, de manera totalmente automatizada como dijimos, aunque te parezca realmente imposible creerlo. Así es, la ciencia que estudia la interacción de las partículas y la teconología han avanzado hasta límites insospechados para el ser humano. Pero no solo eso, también puedes hacer, si es tu voluntad, un seguimiento totalmente personalizado e infinitamente ilimitado, valga la redundancia, de las interacciones con algunos de los tantos clientes que puede llegar a tener tu empresa si el proyecto es aprobado por la ley que regula todo este tipo de cuestiones de este lado del Ecuador. Sabemos que puede ser bastante tedioso configurarlo, por eso nos hemos capacitado durante siglos para hacerlo de manera efectiva y rápida. Esto es trabajo profesional, no es cualquier cosa. Además, y por si todo lo mencionado anteriormente fuera poco, puedes arreglártelas para configurar fácilmente disparadores automáticos que te ayudaran en tu tarea de disparar automáticamente y expandir las funcionalidades ya explicadas, pero ahora sin límites. Nada mal para un programador "novato", ¿verdad?. Bueno, este es solo un ejemplo de todo lo que puedes lograr usando nuestro pequeño y adorable bot. No dudes en programarlo y agregarlo a tu número empresarial. Si lo haces podrías llegar a ser uno de los primeros desarrolladores en configurar las opciones de accesibilidad limitada en toda la región. Eso no solo sería un logro, si no que también sería todo un hito en el campo de la medicina suiza. Y tengo tres buenas razones para hacer tal afirmación. El único problema es que ahora no las recuerdo bien. Pero vamos, que es conveniente a más no poder. Si yo fuera tú, aprovecharía esta oportunidad única. Sinceramente no creo que se vuelvan a dar las cosas de esta manera, al menos en los próximos milenios. Como ves, vale la pena el esfuerzo y sacrificio. Al fin y al cabo, solo toma 3 segundos desarrollarlo y las ventajas son prácticamente inifinitas, y trascienden en el tiempo. No se me ocurre una razón de peso para no aprovechar esta oportunidad. Pero te voy a dar tu tiempo para pensarlo, si es que aún lo necesitas. Si te decides de una vez, puedes hacer clic en el siguiente enlace para **[Ver más informacion](https://bot-whatsapp.netlify.app/)**

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
