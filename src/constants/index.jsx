import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Productos", href: "#productos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Suscripción", href: "#suscripcion" },
  { label: "Testimonios", href: "#testimonios" },
];

export const testimonials = [
  {
    user: "Roberto Carlos",
    company: "Belleza Natural",
    image: user1,
    text: "Estoy extremadamente satisfecho con los productos. La calidad y la efectividad son excepcionales. ¡Definitivamente recomendaría estos productos a todas mis amigos/as!",
  },
  {
    user: "María García",
    company: "Glow Beauty Co.",
    image: user2,
    text: "¡No puedo dejar de hablar sobre lo increíble que es este producto! Mi piel nunca se ha sentido tan suave y radiante. ¡Gracias por crear algo tan maravilloso!",
  },
  {
    user: "Germán Tolosa",
    company: "Cosmética Estelar",
    image: user3,
    text: "Los productos de esta marca han transformado por completo mi rutina de cuidado de la piel. ¡Gracias por hacer productos tan increíbles!",
  },
  {
    user: "Alan Sanchez",
    company: "Belleza Brillante",
    image: user4,
    text: "¡Estoy enamorado de estos productos! Han mejorado la textura y el tono de mi piel de una manera que nunca creí posible. ¡No puedo esperar para probar más!",
  },
  {
    user: "Esteban Ruiz",
    company: "Pura Belleza",
    image: user5,
    text: "¡Increíble! Estos productos han superado todas mis expectativas. Mi piel nunca ha estado más suave y radiante. ¡Definitivamente compraré de nuevo!",
  },
  {
    user: "Isabel Gómez",
    company: "Belleza Radiante",
    image: user6,
    text: "Estoy impresionada por la calidad y la eficacia de estos productos. ¡Gracias por ayudarme a sentirme más segura y hermosa en mi propia piel!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Variedad de Productos",
    description:
      "Ofrece una amplia gama de productos cosméticos, desde labiales y sombras de ojos hasta bases y esmaltes de uñas.",
  },
  {
    icon: <Fingerprint />,
    text: "Pruebas de Productos",
    description:
      "Permite a los clientes probar virtualmente los productos y ver cómo se ven en su piel.",
  },
  {
    icon: <ShieldHalf />,
    text: "Tutoriales de Maquillaje",
    description:
      "Proporciona tutoriales y consejos de maquillaje para ayudar a los clientes a sacar el máximo partido de los productos cosméticos.",
  },
  {
    icon: <BatteryCharging />,
    text: "Aromas Exclusivos",
    description:
      "Destaca perfumes únicos y exclusivos que complementen la experiencia de belleza de tus clientes.",
  },
  {
    icon: <PlugZap />,
    text: "Colecciones de Esmaltes",
    description:
      "Presenta colecciones de esmaltes de uñas de temporada y de tendencia para mantener a tus clientes al día con las últimas novedades.",
  },
  {
    icon: <GlobeLock />,
    text: "Cuidado de la Piel",
    description:
      "Incluye productos de cuidado de la piel de alta calidad para proporcionar una experiencia de belleza completa y holística.",
  },
];

export const checklistItems = [
  {
    title: "Productos de Alta Calidad",
    description:
      "Ofrece productos cosméticos de alta calidad formulados con ingredientes naturales y beneficiosos para la piel.",
  },
  {
    title: "Envío Rápido y Seguro",
    description:
      "Garantiza un proceso de envío rápido y seguro para que tus clientes reciban sus productos cosméticos sin demoras ni inconvenientes.",
  },
  {
    title: "Atención al Cliente Personalizada",
    description:
      "Brinda un servicio de atención al cliente excepcional para resolver dudas, proporcionar recomendaciones personalizadas y garantizar la satisfacción del cliente.",
  },
  {
    title: "Promociones Especiales",
    description:
      "Ofrece promociones especiales, descuentos y regalos para recompensar a tus clientes leales y atraer a nuevos compradores.",
  },
];

export const pricingOptions = [
  {
    title: "Básico",
    price: "Gratis",
    features: [
      "Acceso a nuestra colección básica.",
      "10% de descuento en tu compra",
      "Actualizaciones de tendencias de belleza",
      "Soporte por correo electrónico y redes sociales",
    ],
  },
  {
    title: "Estándar",
    price: "$15",
    features: [
      "Acceso completo a nuestra colección",
      "20% de descuento en tu compra",
      "Asesoramiento personalizado de belleza",
      "Acceso exclusivo a eventos y promociones",
    ],
  },
  {
    title: "Premium",
    price: "$30",
    features: [
      "Acceso ilimitado a nuestra colección premium",
      "30% de descuento en tu primera compra",
      "Asesoramiento personalizado de belleza",
      "Envío prioritario en todos los pedidos",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Empezar" },
  { href: "#", text: "Tutoriales" },
  { href: "#", text: "Foros de la Comunidad" },
];

export const platformLinks = [
  { href: "#", text: "Características" },
  { href: "#", text: "Dispositivos Compatibles" },
  { href: "#", text: "Requisitos del Sistema" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encuentros" },
  { href: "#", text: "Conferencias" },
];