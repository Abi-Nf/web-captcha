import axios from 'axios';
import { useRef } from 'react';
import { useAutoCaptcha } from './hook/captcha';

const client = axios.create();

export function App() {
  const ref = useRef<HTMLDivElement | null>(null);

  useAutoCaptcha(client, {
    api_key: import.meta.env.VITE_API_KEY,
    integration_url: import.meta.env.VITE_INTEGRATION_URL,
    container: ref.current,
  });

  return (
    <div>
      <div>Captcha example</div>
      <div ref={ref}></div>
    </div>
  );
}
