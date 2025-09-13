# 📧 Guía para Configurar EmailJS - Envío de Formularios

## 🎯 Objetivo
Configurar EmailJS para que el formulario de contacto en `index.html` envíe emails automáticamente a `tu homologaciones@gmail.com` cuando los usuarios lo completen.

## 📋 Paso a Paso

### ✅ Paso 1: Crear cuenta en EmailJS

1. **Ir a EmailJS**: Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Crear cuenta**: Haz clic en "Sign Up" y crea tu cuenta gratuita
3. **Verificar email**: Confirma tu cuenta desde el email que recibas

### ✅ Paso 2: Configurar el servicio de email

1. **Ir a Email Services**: En el dashboard, haz clic en "Email Services"
2. **Añadir servicio**: Haz clic en "Add New Service"
3. **Seleccionar Gmail**: Elige "Gmail" como proveedor
4. **Configurar Gmail**:
   - **Email**: `tu homologaciones@gmail.com`
   - **Password**: Tu contraseña de Gmail (o contraseña de aplicación)
   - **Service Name**: `gmail_service` (o el nombre que prefieras)

### ✅ Paso 3: Crear plantilla de email

1. **Ir a Email Templates**: En el dashboard, haz clic en "Email Templates"
2. **Crear plantilla**: Haz clic en "Create New Template"
3. **Configurar plantilla**:

**Asunto del email:**
```
Nueva consulta de homologación - {{nombre}}
```

**Contenido del email:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Nueva Consulta de Homologación</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #8b4513; border-bottom: 2px solid #daa520; padding-bottom: 10px;">
            Nueva Consulta de Homologación
        </h2>
        
        <p><strong>Fecha:</strong> {{fecha}}</p>
        
        <div style="background: #f5f1e8; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #8b4513; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> {{nombre}}</p>
            <p><strong>Email:</strong> {{email}}</p>
            <p><strong>Teléfono:</strong> {{telefono}}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 2px solid #e6d7c3; border-radius: 10px;">
            <h3 style="color: #8b4513; margin-top: 0;">Descripción del Caso</h3>
            <p style="white-space: pre-wrap;">{{caso}}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background: #faf8f3; border-radius: 10px;">
            <p style="margin: 0; color: #8b4513; font-weight: bold;">
                📞 Contactar al cliente: {{email}} | {{telefono}}
            </p>
        </div>
        
        <hr style="border: none; border-top: 2px solid #e6d7c3; margin: 30px 0;">
        <p style="text-align: center; color: #a0522d; font-size: 14px;">
            Este email fue enviado desde el formulario de contacto de Tu Homologación
        </p>
    </div>
</body>
</html>
```

4. **Guardar plantilla**: Haz clic en "Save"

### ✅ Paso 4: Obtener las claves necesarias

1. **User ID**: En el dashboard, ve a "Account" → "General" → copia tu "User ID"
2. **Service ID**: En "Email Services", copia el ID del servicio que creaste
3. **Template ID**: En "Email Templates", copia el ID de la plantilla que creaste

### ✅ Paso 5: Actualizar el código HTML

Reemplaza estos valores en `index.html`:

```javascript
// Línea 664: Reemplaza "TU_USER_ID_AQUI" con tu User ID
emailjs.init("TU_USER_ID_AQUI");

// Línea 685: Reemplaza con tus IDs reales
emailjs.send('TU_SERVICE_ID_AQUI', 'TU_TEMPLATE_ID_AQUI', formData)
```

**Ejemplo con valores reales:**
```javascript
emailjs.init("user_abc123def456");
emailjs.send('service_xyz789', 'template_abc123', formData)
```

### ✅ Paso 6: Probar el formulario

1. **Abrir index.html** en tu navegador
2. **Completar el formulario** con datos de prueba
3. **Enviar** y verificar que llegue el email a `tu homologaciones@gmail.com`

## 🔒 Configuración de Seguridad

### ✅ Configurar contraseña de aplicación (Gmail)

Si usas autenticación de dos factores en Gmail:

1. **Ir a Google Account**: [https://myaccount.google.com/](https://myaccount.google.com/)
2. **Seguridad** → **Contraseñas de aplicaciones**
3. **Generar contraseña** para "EmailJS"
4. **Usar esta contraseña** en lugar de tu contraseña normal

### ✅ Límites de EmailJS (Plan Gratuito)

- **200 emails/mes** gratuitos
- **Suficiente** para la mayoría de sitios web
- **Upgrade** disponible si necesitas más

## 🧪 Pruebas

### ✅ Casos de prueba

1. **Formulario completo**: Todos los campos llenos
2. **Formulario mínimo**: Solo campos obligatorios
3. **Caracteres especiales**: Acentos, emojis, etc.
4. **Texto largo**: Descripción extensa del caso

### ✅ Verificar en Gmail

- **Bandeja de entrada**: Verificar que lleguen los emails
- **Spam**: Revisar si van a spam (añadir a contactos)
- **Formato**: Verificar que el HTML se vea bien

## 🐛 Solución de Problemas

### Error: "Invalid User ID"
**Solución:**
- Verificar que el User ID sea correcto
- Asegurarse de que no haya espacios extra

### Error: "Service not found"
**Solución:**
- Verificar que el Service ID sea correcto
- Asegurarse de que el servicio esté activo

### Error: "Template not found"
**Solución:**
- Verificar que el Template ID sea correcto
- Asegurarse de que la plantilla esté guardada

### Emails van a spam
**Solución:**
- Añadir `tu homologaciones@gmail.com` a contactos
- Configurar filtros en Gmail
- Usar un dominio personalizado (opcional)

## 📊 Monitoreo

### ✅ Dashboard de EmailJS
- **Estadísticas**: Emails enviados, entregados, fallidos
- **Logs**: Historial de envíos
- **Límites**: Uso mensual

### ✅ Gmail
- **Bandeja de entrada**: Verificar recepción
- **Filtros**: Organizar emails automáticamente

## 🎉 ¡Listo!

Una vez completados todos los pasos:

- ✅ **Formulario funcional** que envía emails reales
- ✅ **Plantilla profesional** con toda la información
- ✅ **Seguridad configurada** con contraseñas de aplicación
- ✅ **Monitoreo activo** de emails enviados
- ✅ **Solución de problemas** documentada

**¡Tu formulario de contacto está listo para recibir consultas! 🚀**

## 📞 Soporte

Si tienes problemas:
- **EmailJS Docs**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **Contacto**: deladoctaalmundo25@gmail.com
- **WhatsApp**: +351 931 157 896
