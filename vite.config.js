import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import os from 'os';

const VIRTUAL_ADAPTER_NAME = /^(vEthernet|VMware|VirtualBox|Tailscale|WSL|Loopback|Docker)/i;

function getLanIp() {
    if (process.env.VITE_HMR_HOST) {
        return process.env.VITE_HMR_HOST;
    }

    const interfaces = os.networkInterfaces();
    const candidates = [];

    for (const [name, ifaceList] of Object.entries(interfaces)) {
        if (VIRTUAL_ADAPTER_NAME.test(name)) continue;

        for (const iface of ifaceList ?? []) {
            if (iface.family !== 'IPv4' || iface.internal) continue;
            if (iface.address.startsWith('169.254.')) continue; // link-local/APIPA
            candidates.push(iface.address);
        }
    }

    const privateLan = candidates.find(
        (ip) => ip.startsWith('192.168.') || ip.startsWith('10.') || /^172\.(1[6-9]|2\d|3[01])\./.test(ip)
    );

    return privateLan ?? candidates[0] ?? 'localhost';
}

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        cors: true,
        hmr: {
            host: getLanIp(),
        },
    },
});
