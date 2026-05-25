'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';

export default function N8nChat() {
  useEffect(() => {
    import('@n8n/chat').then(({ createChat }) => {
      createChat({
        webhookUrl: '/api/chat',
        loadPreviousSession: false,
      });
    });
  }, []);

  return null;
}
