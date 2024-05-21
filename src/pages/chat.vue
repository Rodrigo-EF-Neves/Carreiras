<template>
    <div class="div-chat">
        <ChatUsers />
        <ChatDialogo />
    </div>
    <MenuMob />
</template>

<style>
* {
    /* border: 1px solid red; */
}

.div-chat {
    display: flex;
    flex-direction: row;
}

::-webkit-scrollbar {
    display: none;
}

.dialogo-conversa::-webkit-scrollbar{
    display: block;
}

.menu-mob{
    display: none;
}

@media(max-width:800px){
    .menu-mob{
        display: flex;
    }
}
</style>