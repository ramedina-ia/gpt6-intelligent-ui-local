import React, { useState } from 'react';
import { TrendingUp, Send, CheckCircle2 } from 'lucide-react';

export const UICard: React.FC<{ title: string; subtitle?: string; children?: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 w-full">
    <div className="border-b border-slate-100 pb-3 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-extrabold text-slate-900">{title}</h3>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
          SHADCN UI
        </span>
      </div>
      {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

export const UIMetric: React.FC<{ label: string; value: string; trend?: string }> = ({
  label,
  value,
  trend,
}) => (
  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-4 flex items-center justify-between shadow-sm">
    <div>
      <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">{label}</span>
      <div className="text-2xl font-black text-slate-900 mt-0.5 font-mono">{value}</div>
    </div>
    {trend && (
      <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
        <TrendingUp className="w-3.5 h-3.5" />
        {trend}
      </div>
    )}
  </div>
);

export const UISlider: React.FC<{
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit?: string;
  onChange?: (val: number) => void;
}> = ({ label, min, max, step, defaultValue, unit = '', onChange }) => {
  const [val, setVal] = useState(defaultValue);
  return (
    <div className="space-y-2 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/70">
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="font-mono font-bold text-blue-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
          {val.toLocaleString()} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e) => {
          const v = Number(e.target.value);
          setVal(v);
          onChange?.(v);
        }}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
};

export const UIButton: React.FC<{ label: string; webhookUrl?: string; payload?: Record<string, any> }> = ({
  label,
  webhookUrl,
  payload,
}) => {
  const [url, setUrl] = useState(
    webhookUrl || import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://tu-instancia.n8n.cloud/webhook-test/intelligent-ui'
  );
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleTrigger = async () => {
    setStatus('sending');
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload || { timestamp: new Date().toISOString() }),
      });
    } catch {
      try {
        await fetch(url, { method: 'POST', mode: 'no-cors', body: JSON.stringify(payload || {}) });
      } catch {}
    }
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="pt-2 space-y-2">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
          <span>URL del Webhook de n8n (POST):</span>
          <span className="text-blue-600 font-mono">JSON en vivo</span>
        </label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full bg-white border border-slate-200 focus:border-blue-600 rounded-lg px-2.5 py-1 text-[11px] font-mono text-slate-700 outline-none"
        />
      </div>
      <button
        onClick={handleTrigger}
        disabled={status === 'sending'}
        className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
      >
        {status === 'sent' ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-emerald-300" /> ¡Payload Enviado a n8n Exitosamente!
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" /> {status === 'sending' ? 'Enviando POST a n8n...' : label}
          </>
        )}
      </button>
    </div>
  );
};
