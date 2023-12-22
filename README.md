<h1>API CRUD de Lenguajes de Programación</h1>

<p>Este proyecto consiste en una API que proporciona operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar información sobre lenguajes de programación. Cada lenguaje tiene un nombre y una cantidad de programadores.</p>

<h2>Configuración del Proyecto</h2>

<ol>
        <li><strong>Instalación de Dependencias:</strong> Ejecutar <code>npm install</code> para instalar todas las dependencias. Asegúrate de tener Node.js y npm instalados.</li>
        <li><strong>Configuración de la Base de Datos:</strong> La base de datos NO se creará automáticamente al iniciar el proyecto por primera vez. Debes crear una con una unica tabla denominada "languages" la cual poseera las columnas "id", "name" y "programmers".Asegúrate de tener un servidor MySQL en ejecución y agregar las variables de entorno necesarias en el archivo <code>.env</code></li>
        <li><strong>Variables de Entorno:</strong> Crea un archivo <code>.env</code> en la raíz del proyecto y configura las variables de entorno. Asegúrate de cambiar "host", "database", "user", y "password" con los valores específicos de tu configuración de base de datos.</li>
</ol>

<h2>Ejecutar el Proyecto</h2>

<p>Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:</p>

<pre><code>npm run dev</code></pre>

<p>Esto iniciará el servidor en el puerto predeterminado (puedes cambiarlo en el archivo de configuración si es necesario). La API estará disponible en <code>http://localhost:4000</code> por defecto.</p>

<h2>Endpoints de la API</h2>

<ol>
    <li><strong>Obtener todos los Lenguajes</strong></li>
        <ul>
            <li><strong>Endpoint:</strong> <code>GET /api/languages</code></li>
            <li><strong>Descripción:</strong> Obtiene la lista completa de lenguajes de programación.</li>
</ul>

<li><strong>Obtener un Lenguaje por ID</strong></li>
<ul>
        <li><strong>Endpoint:</strong> <code>GET /api/languages/:id</code></li>
        <li><strong>Descripción:</strong> Obtiene un lenguaje específico según su ID.</li>
</ul>

<li><strong>Crear un Nuevo Lenguaje</strong></li>
        <ul>
            <li><strong>Endpoint:</strong> <code>POST /api/languages</code></li>
            <li><strong>Descripción:</strong> Crea un nuevo lenguaje. Se espera un cuerpo de solicitud JSON con los campos "name" y "programmers".</li>
        </ul>

<li><strong>Actualizar un Lenguaje Existente</strong></li>
        <ul>
            <li><strong>Endpoint:</strong> <code>PUT /api/languages/:id</code></li>
            <li><strong>Descripción:</strong> Actualiza un lenguaje existente según su ID. Se espera un cuerpo de solicitud JSON con los campos que deseas actualizar.</li>
        </ul>

<li><strong>Eliminar un Lenguaje</strong></li>
        <ul>
            <li><strong>Endpoint:</strong> <code>DELETE /api/languages/:id</code></li>
            <li><strong>Descripción:</strong> Elimina un lenguaje según su ID.</li>
        </ul>
</ol>

<h2>Dependencias Utilizadas</h2>

<ul>
        <li><strong>Express</strong>
        <li><strong>Promise-sql</strong>
        <li><strong>Dotenv</strong>
        <li><strong>babel/cli</strong>
        <li><strong>babel/node</strong>
        <li><strong>babel/core</strong>
        <li><strong>babel/preset-env</strong>
        <li><strong>morgan</strong>
        <li><strong>nodemon</strong>
</ul>

<p>Asegúrate de instalar estas dependencias utilizando los comandos proporcionados antes de iniciar el proyecto.</p>

<p>Una vez realizados todos los pasos la API deberia encontrarse en funcionamiento.</p>

<p>Esta version es temporal, se realizarán mejoras.</p>

</body>
</html>
