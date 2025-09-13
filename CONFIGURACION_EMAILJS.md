# Configuración EmailJS - Tu Homologación

## 🔧 Valores a Reemplazar en index.html

Después de configurar EmailJS, reemplaza estos valores en el archivo `index.html`:

### Línea 664 - User ID
```javascript
// ANTES:
emailjs.init("TU_USER_ID_AQUI");

// DESPUÉS (ejemplo):
emailjs.init("user_abc123def456");
```

### Línea 685 - Service ID y Template ID
```javascript
// ANTES:
emailjs.send('TU_SERVICE_ID_AQUI', 'TU_TEMPLATE_ID_AQUI', formData)

// DESPUÉS (ejemplo):
emailjs.send('service_xyz789', 'template_abc123', formData)
```

## 📧 Configuración del Email de Destino

**Email de destino:** `tu homologaciones@gmail.com`

**Asunto del email:** `Nueva consulta de homologación - {{nombre}}`

## 📝 Datos que se envían

El formulario enviará estos datos:
- **Nombre completo** (obligatorio)
- **Email** (obligatorio)
- **Teléfono** (opcional)
- **Descripción del caso** (obligatorio)
- **Fecha y hora** (automático)

## 🧪 Prueba del Formulario

1. Abre `index.html` en tu navegador
2. Completa el formulario con datos de prueba
3. Haz clic en "Enviar Solicitud"
4. Verifica que llegue el email a `tu homologaciones@gmail.com`

## ✅ Checklist de Configuración

- [ ] Cuenta de EmailJS creada
- [ ] Servicio Gmail configurado
- [ ] Plantilla de email creada
- [ ] User ID copiado y pegado
- [ ] Service ID copiado y pegado
- [ ] Template ID copiado y pegado
- [ ] Formulario probado exitosamente
- [ ] Email recibido en destino

## 🔒 Seguridad

- Usar contraseña de aplicación de Gmail
- No exponer claves en el código público
- Configurar límites de envío si es necesario

---

**¡Configuración lista para usar! 🚀**
