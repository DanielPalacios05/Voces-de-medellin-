import prado from "@/app/static/prado.jpg"
import estadio from "@/app/static/estadio-atanasio.jpg"
import iglesia from "@/app/static/iglesia.jpg"
import barrio from "@/app/static/barrio_antioquia.jpg"
import universidad from "@/app/static/universidad.png"
import poblado from "@/app/static/poblado.jpg"
import fernando from "@/app/static/content/fernando/fernando.jpg"
import epifanio from "@/app/static/content/epifanio/epifanio.jpg"
import valentina from "@/app/static/content/valentina/mujer.jpg"
import juan from "@/app/static/content/epifanio/juan.jpg"
import { StaticImageData } from "next/image"
import { promises as fs } from "fs"


async function loadTxtContent(path: string): Promise<string> {
    return (await fs.readFile(process.cwd() + "/src/app/static/content/" + path)).toString()
}

export interface GameData {
    players: Player[]
    zones: Zone[]
    stories: Story[]
    events: Story[]
}

export interface Zone {
    zoneId: number
    name: string
    image: StaticImageData
}

export interface Player {
    name: string
    context: string
    end?: string
    image: StaticImageData
    id: number
}

export interface Option {
    index: string
    description: string
    result: string
}

export interface Story {
    title: string
    description: string
    options: Option[]
    zoneId: number
    playerId: number
    question: string

}

const players: Player[] = [
    {
        name: "Fernando",
        context: await loadTxtContent("fernando/contexto.txt"),
        end: "Final de personaje ayy ",
        image: fernando, id: 0
    },
    {
        name: "Valentina",
        context: await loadTxtContent("valentina/contexto.txt"),
        image: valentina, id: 1
    },
    {
        name: "Epifanio Onofre",
        context: await loadTxtContent("fernando/contexto.txt"),
        image: epifanio, id: 2
    },
    {
        name: "Juan Esteban Ocampo",
        context: await loadTxtContent("fernando/contexto.txt"),
        image: juan, id: 3
    },
]

const zones: Zone[] = [
    { name: "Prado", image: prado, zoneId: 0 },
    { name: "Estadio Atanasio", image: estadio, zoneId: 1 },
    { name: "Iglesia de San Antonio", image: iglesia, zoneId: 2 },
    { name: "Barrio Antioquia", image: barrio, zoneId: 3 },
    { name: "Universidad de Antioquia", image: universidad, zoneId: 4 },
    { name: "Poblado", image: poblado, zoneId: 5 }
]

const stories: Story[] = [
    {
        title: "Abstinencia",
        description: await loadTxtContent("fernando/prado/historia.txt"),
        options: [
            {
                index: "A",
                description: "Consumir",
                result: await loadTxtContent("fernando/prado/opcionA.txt")
            },
            {
                index: "B",
                description: "No consumir",
                result: await loadTxtContent("fernando/prado/opcionB.txt")
            }
        ],
        playerId: 0,
        zoneId: 0,
        question: await loadTxtContent("fernando/prado/preguntaHistoria.txt")
    },
    {
        title: "Robo en el parque",
        description: await loadTxtContent("valentina/prado/historia.txt"),
        options: [
            {
                index: "A",
                description: "Razonar con el ladron",
                result: " El ladrón se arrepiente y se va. Valentina gana un turno extra por su valentía y empatía."
            },
            {
                index: "B",
                description: "Intentar escapar corriendo",
                result: await loadTxtContent("valentina/estadio/opcionA.txt")
            }
        ],
        playerId: 1,
        zoneId: 0,
        question: "¿Deberían los recursos destinados a la caridad y fundaciones privadas ser gestionados por individuos adinerados o es más efectivo que estos recursos sean administrados por organizaciones públicas y gubernamentales?"
    },
    {
        title: "Barras bravas",
        description: "Después de presenciar un emocionante clásico de fútbol colombiano entre Medellín y Nacional en el estadio Atanasio Girardot, Valentina decide caminar con sus amigos hacia su automóvil en el estacionamiento. De repente, se encuentran con un grupo de aficionados exaltados discutiendo acaloradamente sobre el resultado del partido.",
        options: [
            {
                index: "A",
                description: "Intentar mediar en la discusión",
                result: " El ladrón se arrepiente y se va. Valentina gana un turno extra por su valentía y empatía."
            },
            {
                index: "B",
                description: "Intentar escapar corriendo",
                result: await loadTxtContent("valentina/prado/opcion2.txt")
            }
        ],
        playerId: 1,
        zoneId: 1,
        question: "¿Como podríamos en Medellín controlar a las barras bravas? "
    },
    {
        title: "Robo de las donaciones",
        description: "Valentina asistía a una misa en la histórica Iglesia de San Antonio en Medellín. Durante la misa, notó a un hombre actuando de manera sospechosa cerca de las donaciones. Preocupada por la seguridad de los fondos y los feligreses, decidió intervenir",
        options: [
            {
                index: "A",
                description: "Enfrentar al sospechoso",
                result: "Valentina decide confrontar al hombre y preguntarle sobre sus intenciones. \nResultado: El hombre se pone a la defensiva y un grupo de personas interviene. \nPierde 1 turno debido al altercado. "
            },
            {
                index: "B",
                description: " Avisar al párroco",
                result: "Valentina rápidamente avisa al párroco sobre la situación. \n\nResultado: El párroco llama a la seguridad de la iglesia, quienes manejan la situación discretamente. \n\nJuego de mesa: Avanza 2 casillas por su prudente acción."
            },
            {
                index: "C",
                description: "Llamar a la policía",
                result: "Resultado: La policía llega y genera un altercado con el sospechoso. Algunos feligreses critican la intervención policial en un lugar de culto. \n\nJuego de mesa: Pierde 2 turnos debido al conflicto generado y la incomodidad de los feligreses."
            },
        ],
        playerId: 1,
        zoneId: 2,
        question: "¿Estás de acuerdo con que las iglesias paguen impuestos?"
    },
    {
        title: "Robo de las donaciones",
        description: "En el dinámico Barrio Antioquia de Medellín, Valentina estaba supervisando una de las actividades comunitarias organizadas por su fundación. Mientras recorría el barrio, notó a un grupo de jóvenes en una esquina que parecían estar en una transacción sospechosa.",
        options: [
            {
                index: "A",
                description: "Enfrentar a los jovenes",
                result: "Valentina decide acercarse a los jóvenes y preguntarles qué están haciendo. \n\nResultado: Los jóvenes se molestan y la situación se vuelve tensa hasta que un vecino interviene. \n\nJuego de mesa: Pierde 1 turno por la confrontación.",
            },
            {
                index: "B",
                description: "Llamar a la policía",
                result: "Valentina discretamente llama a la policía para reportar la actividad sospechosa. \n\nResultado: La presencia policial genera tensión en el barrio y algunos miembros de la comunidad se quejan con la fundación por poner en peligro a los habitantes. \n\nJuego de mesa: Pierde 2 turnos debido al conflicto generado con la comunidad.",            },
            {
                index: "C",
                description: "Informar a un líder comunitario",
                result: "Valentina decide informar a un líder comunitario conocido en la zona sobre lo que vio. \n\nResultado: El líder comunitario habla con los jóvenes y la situación se resuelve pacíficamente. \n\nJuego de mesa: Gana un turno extra por su prudente decisión."
            },
        ],
        playerId: 1,
        zoneId: 3,
        question: "¿Es adecuado llamar a la policía cuando se observa una actividad sospechosa en un barrio vulnerable aun sabiendo que esto podría generar tensión y conflictos con la comunidad local?"
    },
    {
        title: "Universidad de Antioquia",
        description: "En la Universidad de Antioquia, Valentina asistía a una conferencia sobre desarrollo social. Después del evento, mientras caminaba por el campus, notó una manifestación de estudiantes protestando contra una propuesta controversial del rector.",
        options: [
            {
                index: "1",
                description: "Unirse a la manifestación",
                result: "La manifestación se mantiene pacífica y la presencia de Valentina ayuda a legitimar las demandas de los estudiantes.",
            },
            {
                index: "2",
                description: "Llamar a la seguridad del campus",
                result: "La presencia de la seguridad intensifica la tensión y algunos estudiantes se sienten amenazados, generando críticas hacia Valentina por no manejar la situación de manera más diplomática.",
            },
            {
                index: "3",
                description: "Observar desde lejos",
                result: "La manifestación se desarrolla sin incidentes, pero Valentina siente que pudo haber apoyado más activamente.",
            }
        ],
        zoneId: 4,
        playerId:1,
        question: "¿Es adecuado llamar a la seguridad del campus durante una manifestación estudiantil o es mejor permitir que los estudiantes expresen sus demandas sin intervención para evitar escaladas de tensión?"
    },
    {
        title: "Poblado",
        description: "Finalmente, en El Poblado, Valentina organizó un evento benéfico en su mansión. Durante el evento, se percata de un grupo de jóvenes que parecen estar planeando algo sospechoso cerca de la entrada.",
        options: [
            {
                index: "1",
                description: "Enfrentar a los jóvenes",
                result: "Los jóvenes se sienten intimidados y deciden marcharse rápidamente.",
            },
            {
                index: "2",
                description: "Llamar a la policía",
                result: "La llegada de la policía genera un altercado, y algunos invitados critican la intervención policial en un evento benéfico. Sin embargo, Valentina usa su influencia para minimizar las consecuencias legales y evitar cualquier responsabilidad, lo que provoca indignación entre algunos presentes que sienten que se aprovechó de su posición.",
            },
            {
                index: "3",
                description: "Observar desde lejos",
                result: "Los jóvenes, al notar que están siendo observados, se dispersan sin causar problemas.",
            }
        ],
        zoneId: 5,
        playerId: 1,
        question: "No es justo que las personas adineradas utilicen su influencia y recursos para evadir responsabilidades ante las autoridades en situaciones de conflicto, especialmente cuando sus decisiones afectan negativamente a la comunidad. ¿Qué estrategias se les ocurren para evitar esto?",
    }
]

export const gameData: GameData = {
    players: players,
    zones: zones,
    stories: stories,
    events: []
}