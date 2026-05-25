'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';

const THEME_CSS = `
  :root {
    --chat--color--primary:            #C5522A;
    --chat--color--primary-shade-50:   #B34020;
    --chat--color--primary--shade-100: #8F3015;
    --chat--color--secondary:          #3D2716;
    --chat--color-secondary-shade-50:  #2B1A0E;
    --chat--color-white:               #FFFFFF;
    --chat--color-light:               #F8F0E8;
    --chat--color-light-shade-50:      #E8DDD0;
    --chat--color-light-shade-100:     #D8CBBF;
    --chat--color-medium:              #C4A090;
    --chat--color-dark:                #1A0E08;
    --chat--color-typing:              #6B4A33;
    --chat--spacing:                   1rem;
    --chat--border-radius:             1rem;
    --chat--transition-duration:       0.2s;
    --chat--font-family:               'Poppins', ui-sans-serif, system-ui, sans-serif;
    --chat--window--width:             380px;
    --chat--window--height:            560px;
    --chat--window--border:            1px solid #E8DDD0;
    --chat--window--border-radius:     1.25rem;
    --chat--header--background:        #1A0E08;
    --chat--header--color:             #F8F0E8;
    --chat--header--border-bottom:     1px solid #3D2716;
    --chat--heading--font-size:        1.125rem;
    --chat--subtitle--font-size:       0.8125rem;
    --chat--subtitle--line-height:     1.5;
    --chat--message--font-size:        0.9375rem;
    --chat--message--border-radius:    0.875rem;
    --chat--message--bot--background:  #FFFFFF;
    --chat--message--bot--color:       #2B1A0E;
    --chat--message--bot--border:      1px solid #E8DDD0;
    --chat--message--user--background: #3D2716;
    --chat--message--user--color:      #F8F0E8;
    --chat--input--background:         #FFFFFF;
    --chat--input--border:             1px solid #E8DDD0;
    --chat--input--border-radius:      0.875rem;
    --chat--input--placeholder--color: #A67D66;
    --chat--input--text--color:        #2B1A0E;
    --chat--input--send--button--background:       #C5522A;
    --chat--input--send--button--background-hover: #B34020;
    --chat--input--send--button--color:            #FFFFFF;
    --chat--toggle--background:        #1A0E08;
    --chat--toggle--hover--background: #3D2716;
    --chat--toggle--active--background:#C5522A;
    --chat--toggle--color:             #F8F0E8;
    --chat--toggle--size:              3.25rem;
    --chat--toggle--border-radius:     9999px;
    --chat--toggle--box-shadow:        0 4px 16px 0 rgb(43 26 14 / 0.25);
  }
  .chat-messages-list {
    background-color: #F8F0E8 !important;
  }
  .chat-inputs {
    background-color: #F8F0E8 !important;
    border-top: 1px solid #E8DDD0 !important;
    border-radius: 0 0 1.25rem 1.25rem;
  }
`;

export default function N8nChat() {
  useEffect(() => {
    // Inject theme overrides after n8n/chat style.css so our vars win the cascade
    if (!document.getElementById('chat-theme-overrides')) {
      const style = document.createElement('style');
      style.id = 'chat-theme-overrides';
      style.textContent = THEME_CSS;
      document.head.appendChild(style);
    }

    import('@n8n/chat').then(({ createChat }) => {
      createChat({
        webhookUrl: '/api/chat',
        loadPreviousSession: false,
        initialMessages: [
          'Welcome to Brew & Bloom! ☕',
          'Ask me about our menu, hours, reservations, or anything else. How can I help you today?',
        ],
        i18n: {
          en: {
            title: 'Brew & Bloom',
            subtitle: 'Your coffee companion — here to help anytime.',
            footer: '',
            inputPlaceholder: 'Ask about our menu, hours, specials...',
            getStarted: 'Start a Conversation',
            closeButtonTooltip: 'Close chat',
          },
        },
      });
    });
  }, []);

  return null;
}
