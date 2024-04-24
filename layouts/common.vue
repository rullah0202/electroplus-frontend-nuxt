<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <div id="TopMenu" class="w-full border-b bg-[#FAFAFA] md:block hidden">
            <ul class="                    flex 
                            items-center 
                            justify-end
                            text-xs 
                            text-[#333333]
                            font-light 
                            px-2 
                            h-10
                            bg-[#FAFAFA] 
                            max-w-[1200px]">
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    <NuxtLink to="/services">Services</NuxtLink>
                </li>
                <li class="border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </ul>
        </div>
        
    </div>
    <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
    <slot/>
    <Footer/>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>