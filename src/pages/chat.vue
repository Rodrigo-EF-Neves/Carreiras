<template>
    <div class="div-chat">
        <ChatUsers />
        <ChatDialogo />
    </div>
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
</style>