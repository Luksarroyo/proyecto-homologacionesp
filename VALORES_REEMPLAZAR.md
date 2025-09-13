# 🔧 Valores a Reemplazar en index.html

## 📍 Ubicaciones exactas en el código:

### Línea 664 - User ID
```javascript
// REEMPLAZAR ESTA LÍNEA:
emailjs.init("TU_USER_ID_AQUI");

// CON TU USER ID REAL (ejemplo):
emailjs.init("user_abc123def456");
```

### Línea 685 - Service ID y Template ID
```javascript
// REEMPLAZAR ESTA LÍNEA:
emailjs.send('TU_SERVICE_ID_AQUI', 'TU_TEMPLATE_ID_AQUI', formData)

// CON TUS IDs REALES (ejemplo):
emailjs.send('service_xyz789', 'template_abc123', formData)
```

## 📋 Checklist de Configuración:

### ✅ EmailJS Dashboard:
- [ ] Cuenta creada en EmailJS
- [ ] Servicio Gmail configurado con `tu homologaciones@gmail.com`
- [ ] Plantilla creada con el HTML proporcionado
- [ ] User ID copiado
- [ ] Service ID copiado  
- [ ] Template ID copiado

### ✅ Archivo index.html:
- [ ] Línea 664: User ID reemplazado
- [ ] Línea 685: Service ID y Template ID reemplazados
- [ ] Archivo guardado

### ✅ Prueba:
- [ ] Formulario completado con datos de prueba
- [ ] Email enviado exitosamente
- [ ] Email recibido en `tu homologaciones@gmail.com`

## 🧪 Datos de Prueba:

**Nombre:** Juan Pérez  
**Email:** juan.perez@ejemplo.com  
**Teléfono:** +34 600 123 456  
**Caso:** Necesito homologar mi título de Medicina obtenido en Argentina. ¿Cuál es el proceso?

## 🚨 Si algo no funciona:

1. **Verificar consola del navegador** (F12 → Console)
2. **Revisar IDs** - deben ser exactos, sin espacios
3. **Verificar servicio Gmail** - debe estar activo
4. **Revisar spam** - emails pueden ir ahí inicialmente

---

**¡Una vez completado, tu formulario estará funcionando al 100%! 🎉**
