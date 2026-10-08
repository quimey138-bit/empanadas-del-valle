# Empanadas del Valle

Landing page profesional para **Empanadas del Valle**, hecha con Next.js App Router, JavaScript/JSX, Tailwind CSS y lucide-react.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

Para producción:

```bash
npm run build
npm run start
```

## Configuración pendiente

Editá `lib/site-config.js` para completar:

- `whatsappNumber`: número en formato internacional, solo dígitos. Ejemplo Argentina: `54911XXXXXXXX`.
- `openingHours`: horarios reales.
- `address`: dirección real o punto de retiro.
- redes sociales reales, si existen.
- `siteUrl`: URL pública cuando se publique.

Si `whatsappNumber` queda vacío, el botón abre WhatsApp con el mensaje preformateado pero sin destinatario fijo.

## Imágenes usadas

Las imágenes adjuntas quedaron copiadas en `public/images`:

- `logo-empanadas-del-valle.png`
- `empanadas-horneadas-tabla.jpg`
- `empanadas-cajas.jpg`
- `empanadas-armado.jpg`

El diseño mejora su presentación con recortes cuidados, contraste, saturación moderada y composición visual, sin alterar el producto ni generar imágenes falsas.

## Funcionalidades

- Hero responsive con precios: docena $22.000, media docena $12.000 y unidad $2.000.
- Eslogan exacto: "Masa casera hecha en el día y rellenos 100% artesanales".
- Menú diario: Carne a cuchillo, Pollo, Jamón y queso.
- Sabores bajo encargue: Humita, Verdura y variedades a pedido.
- Carrito interactivo por sabor.
- Cálculo automático aplicando packs de 12, packs de 6 y unidades.
- Delivery o retiro.
- Envío orientativo de $1.000.
- Pago por Mercado Pago o efectivo.
- Mensaje de WhatsApp listo para enviar.
- SEO básico y Open Graph.
- Diseño accesible, mobile-first y con animaciones sutiles.

## Estructura

```text
app/
  layout.jsx
  page.jsx
  globals.css
components/
  cart-builder.jsx
  hero.jsx
  info-section.jsx
  menu-section.jsx
  site-footer.jsx
  trust-section.jsx
lib/
  pricing.js
  site-config.js
```
