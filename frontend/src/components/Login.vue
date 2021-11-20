<template>
    <div class="flex flex-col justify-start">
        <header class="flex justify-between bg-black p-4">
            <img src="Doculib.png" alt="" srcset=""
            class="w-1/6 grid self-center">
            <h3 class="text-white text-3xl grid self-center font-serif italic hidden sm:block">
                Bienvenido a doculib
            </h3>
            <div class="flex gap-2 items-center">
            <button @click="openLoginModal()"
            class="rounded border-2 border-red-450 px-4 py-2 h-11 text-white shadow-lg hover:bg-red-450">
            Inicia sesión</button>
            <button
            class="rounded border-2 border-red-450 px-4 py-2 h-11 text-white shadow-lg hover:bg-red-450">
            Registrarse</button>
            </div>
        </header>

        <nav class="flex justify-center py-2 bg-red-450">
            <input type="text" placeholder="Busque un documento por titulo"
            class="w-96 rounded-none pl-4 appearance-none bg-transparent  text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2">
            <button class="flex-shrink-0  text-white hover:text-teal-800 text-sm py-1 px-2 rounded ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </nav>

        <main class="flex justify-between bgImagen h-96 ">
        </main>

        <div class="bg-red-450 hidden">
            <ul class="flex justify-evenly">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                    </svg>
                    Sobre nosotros
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
                    </svg>
                    Catalogo
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                    </svg>
                    Novedades
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    Top 5
                </li>
            </ul>
        </div>

        <section class="py-10 overflow-hidden bg-black " >
            <div class="relative px-16 mx-auto max-w-7xl">
                <h2 class="relative max-w-lg mt-5 mb-10 text-3xl font-semibold leading-tight lg:text-5xl text-white">DOCUMENTOS DESTACADOS</h2>
                <div class="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                    <div class="flex flex-col items-center justify-center col-span-1">
                        <div class="relative p-5">
                            <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-red-900"></div>
                            <img class="relative z-20 w-full rounded-full" src="https://lh3.googleusercontent.com/proxy/Jl-z8lmXKXAAtvqw1E1wlr_LYgbw3oQFF-IAd-eQHuNI7FcUpcMhhoDEf-sKcCyIfWmuw86xXu2xN6Zv7mprF0cQC5DFNNU">
                        </div>
                        <div class="mt-3 space-y-2 text-center">
                            <div class="space-y-1 text-xs font-normal leading-6 text-white">
                                <h3>Nombre del documento:</h3>
                                <h4>Fecha de publicación:</h4>
                                <h4>Nombre del autor:</h4>
                                <h5>Tipo de documento:</h5>
                                <button class="bg-red-350 hover:bg-red-150 text-white font-bold py-1 px-3 border rounded">RESERVAR</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center col-span-1">
                        <div class="relative p-5">
                            <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-red-900"></div>
                            <img class="relative z-20 w-full rounded-full" src="https://lh3.googleusercontent.com/proxy/Jl-z8lmXKXAAtvqw1E1wlr_LYgbw3oQFF-IAd-eQHuNI7FcUpcMhhoDEf-sKcCyIfWmuw86xXu2xN6Zv7mprF0cQC5DFNNU">
                        </div>
                        <div class="mt-3 space-y-2 text-center">
                            <div class="space-y-1 text-xs font-normal leading-6 text-white">
                                <h3>Nombre del documento:</h3>
                                <h4>Fecha de publicación:</h4>
                                <h4>Nombre del autor:</h4>
                                <h5>Tipo de documento:</h5>
                                <button class="bg-red-350 hover:bg-red-150 text-white font-bold py-1 px-3 border rounded">RESERVAR</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center col-span-1">
                        <div class="relative p-5">
                            <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-red-900"></div>
                            <img class="relative z-20 w-full rounded-full" src="https://lh3.googleusercontent.com/proxy/Jl-z8lmXKXAAtvqw1E1wlr_LYgbw3oQFF-IAd-eQHuNI7FcUpcMhhoDEf-sKcCyIfWmuw86xXu2xN6Zv7mprF0cQC5DFNNU">
                        </div>
                        <div class="mt-3 space-y-2 text-center">
                            <div class="space-y-1 text-xs font-normal leading-6 text-white">
                                <h3>Nombre del documento:</h3>
                                <h4>Fecha de publicación:</h4>
                                <h4>Nombre del autor:</h4>
                                <h5>Tipo de documento:</h5>
                                <button class="bg-red-350 hover:bg-red-150 text-white font-bold py-1 px-3 border rounded">RESERVAR</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center col-span-1">
                        <div class="relative p-5">
                            <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-red-900"></div>
                            <img class="relative z-20 w-full rounded-full" src="https://lh3.googleusercontent.com/proxy/Jl-z8lmXKXAAtvqw1E1wlr_LYgbw3oQFF-IAd-eQHuNI7FcUpcMhhoDEf-sKcCyIfWmuw86xXu2xN6Zv7mprF0cQC5DFNNU">
                        </div>
                        <div class="mt-3 space-y-2 text-center">
                            <div class="space-y-1 text-xs font-normal leading-6 text-white">
                                <h3>Nombre del documento:</h3>
                                <h4>Fecha de publicación:</h4>
                                <h4>Nombre del autor:</h4>
                                <h5>Tipo de documento:</h5>
                                <button class="bg-red-350 hover:bg-red-150 text-white font-bold py-1 px-3 border rounded">RESERVAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full bg-black pt-7 pb-7 md:pt-20 md:pb-24">
            <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-white border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                <!-- Image -->
                <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <img src="https://images.vexels.com/media/users/3/255748/isolated/preview/defed5a5778e3d354a908a2defc5742e-escuela-aulaiconos-handcutsimpleshapes-60-4.png" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 ">
                </div>

                <!-- Content -->
                <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl text-white">
                        SOBRE NOSOTROS
                    </h2>
                    <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        Nosotros somos una librería reconocida a nivel nacional, nos destacamos por manejar diversos tipos de documentos como artículos, libros, etc. Ademas de esto manejamos el préstamo de documentos tanto físicos como virtuales, entonces no dudes en reservar tu documento!!
                    </p>
                </div>
            </div>
        </section>

        <section class="py-10 bg-black">
            <div class="container max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold tracking-tight text-center text-white">SERVICIOS</h2>
                <p class="mt-2 text-lg text-center text-gray-600">Mira los servicios que ofrece nuestra pagina</p>
                <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                    <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                        <div class="p-3 text-white bg-red-450 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">CONSULTAR</h4>
                        <p class="text-base text-center text-gray-500">En la biblioteca virtual podrás encontrar diversa cantidad de documentos relacionados con el tema de tu interes.</p>
                    </div>

                    <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                        <div class="p-3 text-white bg-red-450 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                            </svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">CREAR</h4>
                        <p class="text-base text-center text-gray-500">Solicita ser autor para crear y publicar tus propios documentos, siendo reconocido en la comunidad de autores de nuestra biblioteca.</p>
                    </div>

                    <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                        <div class="p-3 text-white bg-red-450 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">EDITAR</h4>
                        <p class="text-base text-center text-gray-500"> Podrás editar la información de un documento que tu hayas creado, personaliza la presentación de tu documento y hazlo más llamativo</p>
                    </div>
                </div>
            </div>
        </section>

        
        <section class="py-20 bg-black">
        <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
            <div class="flex flex-wrap items-center -mx-3">
            <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                <div class="w-full lg:max-w-md">
                <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading text-white">CONTACTENOS</h2>
                <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">A continuación le mostraremos las formas para contactarnos:</p>
                <ul>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    </div>
                    <span class="font-medium text-gray-500">+57 300 321 2314</span>
                    </li>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    </div>                   
                    <span class="font-medium text-gray-500">doculib@doculib.com</span>
                    </li>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                    </div>
                    <span class="font-medium text-gray-500">@SomosDoculib</span>
                    </li>
                </ul>
                </div>
            </div>
            <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://lh3.googleusercontent.com/proxy/1RhXGKailPUtqFv57HKez83QjC_ldulQsDjmXJcYQSKYCSSyMGLpq4A4QM7hw-XL6_3VqBUWGq657J7tBZh6DG9tnmSzeEhE4lbia_B3BpoGyow1VRaqNkcFTaMY" alt="feature image"></div>
            </div>
        </div>
        </section>


        <section class="bg-red-450">
            <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                            Sobre nosotros
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                            Catalogo
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                            Team
                        </a>
                    </div>
                </nav>
                <div class="flex justify-center mt-8 space-x-6">
                    <a href="#" class="text-white hover:text-gray-500">
                        <span class="sr-only">Facebook</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-white hover:text-gray-500">
                        <span class="sr-only">Instagram</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-white hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>
                </div>
                <p class="mt-8 text-base leading-6 text-center text-white">
                    © 2021 Doculib. Todos los derechos son reservados.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import { openModal } from "jenesius-vue-modal";
import LoginForm from "./LoginForm.vue";

export default {
 
    methods: {
        openLoginModal() {
            openModal(LoginForm);
        },
    },
}

</script>

<style scoped>

.bgImagen {
    background-image: url("/Biblioteca.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

</style>