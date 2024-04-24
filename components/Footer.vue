<template>
    <div id="FooterMain" class="w-full bg-[#232F3E] mt-10 mb-2">
        <div class="bg-[#37475A] hover:bg-gray-600 w-full p-3.5 cursor-pointer text-white font-extrabold text-center">
             <div @click="scrollToTop">Back to top</div>   
        </div>
        <div class="md:flex gap-4 w-full justify-between max-w-[1200px] mx-auto p-10 text-white">
            <ul class="md:w-[25%] pt-4 py-10">
                <li class="font-semibold md:text-3xl">ELECTRO PLUS</li>
                <li class="mt-3">House - 12, Road -4, Block-A
                    Section-2, Mirpur - 2
                    Dhaka Bangaladesh 
                </li>
                <li class="mt-2">Phone: +880 1716181438
                </li>
                <li class="mt-2">
                    Email: electroplusbd24@gmail.com 
                </li>

            </ul>
            <ul class="md:w-[25%] pt-4 md:ml-12">
                <li class="font-semibold md:text-2xl">Useful Links</li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink to="/" class="hover:text-red-500">Home</NuxtLink> </li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink to="/about" class="hover:text-red-500">About Us</NuxtLink> </li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink class="hover:text-red-500" to="/services">Services</NuxtLink> </li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink class="hover:text-red-500" to="/contact">Contact</NuxtLink> </li>

            </ul>
            <ul class="md:w-[25%] pt-4">
                <li class="font-semibold md:text-2xl">Our Services</li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink to="/" class="hover:text-red-500">Online Ups</NuxtLink> </li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink to="/" class="hover:text-red-500">Offline Ups</NuxtLink> </li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink class="hover:text-red-500" to="/">IVS</NuxtLink> </li>
                <li><Icon name="material-symbols:keyboard-double-arrow-right" size="17" color="red"/> <NuxtLink class="hover:text-red-500" to="/">IPS & Solar System</NuxtLink> </li>

            </ul>
            <ul class="md:w-[25%] pt-4">
                <li class="font-semibold md:text-2xl">Join Our Newsletter</li>


            </ul>
        </div>
    </div>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>