/*const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const MetaProvider = require('@bot-whatsapp/provider/meta')
const MockAdapter = require('@bot-whatsapp/database/mock')

/**
 * Aqui declaramos los flujos hijos, los flujos se declaran de atras para adelante, es decir que si tienes un flujo de este tipo:
 *
 *          Menu Principal
 *           - SubMenu 1
 *             - Submenu 1.1
 *           - Submenu 2
 *             - Submenu 2.1
 *
 * Primero declaras los submenus 1.1 y 2.1, luego el 1 y 2 y al final el principal.
 */

/*const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
    [
        '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
        'https://bot-whatsapp.netlify.app/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')
    .addAnswer(
        [
            'te comparto los siguientes links de interes sobre el proyecto',
            '👉 *doc* para ver la documentación',
            '👉 *gracias*  para ver la lista de videos',
            '👉 *discord* unirte al discord',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto, flowDiscord]
    )*/

    const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const WebWhatsappProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const {EVENTS} = require('@bot-whatsapp/bot')

/*Flujos de sectores*/
/*Cañada*/

const flujoCombCda = addKeyword('combustible', 'combustibles')
.addAnswer('*Contacto Combustibles CR*')

const flujoDerivadosCda = addKeyword('derivado', 'derivados')
.addAnswer('*Contacto Derivados CR*')

const flujoAgroCda = addKeyword('agro')
.addAnswer('*Contacto Agro CR*')

const flujoLubriCda = addKeyword('lubricante', 'lubricantes')
.addAnswer('*Contacto Lubricantes CR*')

/*Santa Teresa*/

const flujoCombST = addKeyword('combustible', 'combustibles')
.addAnswer('*Contacto Combustibles ST*')

const flujoDerivadosST = addKeyword('derivado', 'derivados')
.addAnswer('*Contacto Derivados ST*')

const flujoAgroST = addKeyword('agro')
.addAnswer('*Contacto Agro ST*')

const flujoLubriST = addKeyword('lubricante', 'lubricantes')
.addAnswer('*Contacto Lubricantes ST*')

/*Lehmann*/

const flujoCombLmn = addKeyword('combustible', 'combustibles')
.addAnswer('*Contacto Combustibles Lehmann*')

const flujoDerivadosLmn = addKeyword('derivado', 'derivados')
.addAnswer('*Contacto Derivados Lehmann*')

const flujoAgroLmn = addKeyword('agro')
.addAnswer('*Contacto Agro Lehmann*')

const flujoLubriLmn = addKeyword('lubricante', 'lubricantes')
.addAnswer('*Contacto Lubricantes Lehmann*')


/*Flujos de sucursales*/ 
const flujoCañada = addKeyword(['1','cañada rosquin','cañada','rosquin','cda'])
.addAnswer('Usted desea comunicarse con la base de *Cañada Rosquin*. Indique a continuación con qué sector desea ponerse en contacto')
.addAnswer(['*Combustibles*','*Derivados*','*Agro*','*Lubricantes*'], null, null, [flujoCombCda, flujoDerivadosCda, flujoAgroCda, flujoLubriCda])

const flujoSantaTeresa = addKeyword(['2','santa teresa','santa','teresa','st'])
.addAnswer('Usted desea comunicarse con la base de *Santa Teresa*. Indique a continuación con qué sector desea ponerse en contacto')
.addAnswer(['*Combustibles*','*Derivados*','*Agro*','*Lubricantes*'], null, null, [flujoCombST, flujoDerivadosST, flujoAgroST, flujoLubriST])

const flujoLehmann = addKeyword(['3','lehmann','lehman','leman'])
.addAnswer('Usted desea comunicarse con la base de *Lehmann*. Indique a continuación con qué sector desea ponerse en contacto')
.addAnswer(['*Combustibles*','*Derivados*','*Agro*','*Lubricantes*'], null, null, [flujoCombLmn, flujoDerivadosLmn, flujoAgroLmn, flujoLubriLmn])

/*Flujos principales*/ 
const flujoPrincipal = addKeyword('hola','buenas','buenos dias','buenas tardes','buenas noches','que tal','ola','saludos')
.addAnswer('Gracias por comunicarse con Avanzar SA. A continuación, indique con cuál de nuestras bases desea ponerse en contacto')
.addAnswer(['*1. Cañada Rosquin*','*2. Santa Teresa*','*3. Lehmann*'], null, null, [flujoCañada, flujoSantaTeresa, flujoLehmann])

const flujoGracias = addKeyword('gracias','grax','muchas gracias','ok')
.addAnswer('¡Gracias por elegirnos!')


/**
 * Esta es la funcion importante es la que realmente inicia
 * el chatbot.
 */


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])

    const adapterProvider = createProvider(MetaProvider, {
        jwtToken: 'EAAH7WLPZAWukBO4ZBuSe3in55oZAw4hPP2AhMEKyObAoW16jNWQ1YChIltG6aUUwkOhNhd7ZAs9RVGCITC6qYtcCMC5XZAm3Dmpns9j6x0VH9bGlZCSpMsiwqna95DynnUnOIZA2f4rvtrGPj4frXomdY72D91UNYFmS4Pq7lIiBXZAnVJzO451O9hHX4cVwcN1tyHT7HIR0NrXSrvQWdE3aog6xowsZD',
        numberId: '128667113656028',
        verifyToken: '654ersdf65g4a32rt15dsf3sd1f15awer6sdfuiAEAST5A45',
        version:'v16.0'
    })

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}

main()
