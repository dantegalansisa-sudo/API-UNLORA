export type ServiceChip = 'instant' | 'api' | 'remote' | 'server';

export interface Service {
  category: string;
  name: string;
  credits: number;
  chip: ServiceChip;
  icon: string;
}

export const CHIP_LABELS: Record<ServiceChip, string> = {
  instant: '⚡ Instant',
  api: '✓ Auto API',
  remote: 'Remote',
  server: 'Server',
};

export const SERVICES: Service[] = [
  {
    category: 'IMEI Services',
    name: 'iPhone Unlock — All Carriers',
    credits: 12,
    chip: 'instant',
    icon: 'smartphone',
  },
  {
    category: 'FMI OFF / iCloud',
    name: 'FMI OFF iPhone (6s → 15 Pro Max)',
    credits: 35,
    chip: 'api',
    icon: 'cloud-off',
  },
  {
    category: 'Activator Services',
    name: 'Activación Operador Libre',
    credits: 44,
    chip: 'instant',
    icon: 'zap',
  },
  {
    category: 'Remote / Rentas',
    name: 'Remote Service — Premium Tools',
    credits: 8,
    chip: 'remote',
    icon: 'monitor',
  },
  {
    category: 'Server Services',
    name: 'Server Activation Pack',
    credits: 29,
    chip: 'server',
    icon: 'server',
  },
  {
    category: 'Bypass Tools',
    name: 'Bypass Tethered (iBridgeOS 10.2+)',
    credits: 35,
    chip: 'api',
    icon: 'shield-off',
  },
];

export const WHATSAPP_URL = 'https://wa.me/1809XXXXXXX';
