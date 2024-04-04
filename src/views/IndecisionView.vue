import ChatMessages from '@/components/chat/ChatMessages.vue';
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- MessageBox -->
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola mundo!!',
    itsMine: true,
  },
  {
    id: new Date().getTime(),
    message: '¿Quieres ir a tomar café?',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No!!',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif',
  },
]);
</script>
