import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckSquare, Square, Sparkles, User, Phone, AlertCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  { id: 'compro', label: 'Website Compro / LP' },
  { id: 'ecommerce', label: 'Toko Online / E-Commerce' },
  { id: 'hris', label: 'Sistem HRIS & Payroll' },
  { id: 'cad', label: 'CAD 2D/3D & Prototype' },
  { id: 'erp', label: 'Clarate ERP System' },
];

interface LeadCaptureModalProps {
  isOpen: boolean;
  onSuccess: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['compro']);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('⚠️ Silakan isi nama lengkap Anda!');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('⚠️ Silakan isi nomor WhatsApp aktif Anda!');
      return;
    }
    if (selectedServices.length === 0) {
      setErrorMessage('⚠️ Pilih minimal 1 kebutuhan layanan!');
      return;
    }

    setErrorMessage('');

    // Rangkum label layanan yang dipilih
    const chosenLabels = SERVICE_OPTIONS.filter((s) =>
      selectedServices.includes(s.id)
    ).map((s) => `• ${s.label}`);

    // Format pesan WhatsApp otomatis
    const waMessage = `Halo Rendy, saya ingin konsultasi dan coba demo sistem.

*Data Kontak:*
👤 *Nama:* ${name.trim()}
📱 *No. WhatsApp:* ${phone.trim()}

*Kebutuhan Layanan:*
${chosenLabels.join('\n')}

Mohon informasi penawaran dan akses demonya ya, terima kasih!`;

    const waUrl = `https://wa.me/6285141220521?text=${encodeURIComponent(waMessage)}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');

    // Callback menutup modal
    onSuccess();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto select-none">
        {/* Backdrop Gelap Terkunci (Tidak ada fungsi onClick tutup) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#071b2f]/85 backdrop-blur-md"
        />

        {/* Kotak Modal Neo-Brutalist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative z-10 w-full max-w-lg bg-[#fffdf5] border-3 sm:border-4 border-[#0f172a] rounded-[24px] sm:rounded-[32px] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] overflow-hidden my-auto p-5 sm:p-7 space-y-4 text-[#0f172a]"
        >
          {/* Header Pop Up */}
          <div className="space-y-1 pb-3 border-b-2 border-[#0f172a]/15">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#fde047] text-[#0f172a] text-[11px] font-mono font-black border-2 border-[#0f172a] w-fit shadow-[2px_2px_0px_#0f172a]">
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>FORMULIR KONSULTASI &amp; DEMO</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-[#0f172a] tracking-tight leading-tight mt-1">
              Mulai Konsultasi &amp; Akses Demo
            </h3>
            <p className="text-xs text-[#475569] font-medium leading-relaxed">
              Lengkapi data singkat di bawah untuk terhubung langsung ke WhatsApp pengembang.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Input Nama */}
            <div className="space-y-1">
              <label className="text-xs font-mono font-black text-[#0f172a] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>NAMA LENGKAP:</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] text-xs sm:text-sm font-medium text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0284c7] shadow-[2px_2px_0px_#0f172a]"
              />
            </div>

            {/* Input Nomor WhatsApp */}
            <div className="space-y-1">
              <label className="text-xs font-mono font-black text-[#0f172a] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#15803d]" />
                <span>NOMOR WHATSAPP:</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 081234567890"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] text-xs sm:text-sm font-medium text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0284c7] shadow-[2px_2px_0px_#0f172a]"
              />
            </div>

            {/* Pilihan Layanan Multi-select */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-mono font-black text-[#0f172a] flex items-center justify-between">
                <span>PILIH KEBUTUHAN (BISA &gt;1):</span>
                <span className="text-[10px] font-mono font-bold text-[#0284c7]">Multi-Select</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICE_OPTIONS.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all cursor-pointer select-none ${
                        isChecked
                          ? 'bg-[#fde047] border-[#0f172a] shadow-[2px_2px_0px_#0f172a] font-bold'
                          : 'bg-[#fff9d4]/60 hover:bg-[#fff9d4] border-[#0f172a]/30 shadow-xs font-medium'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#0f172a] shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-[#94a3b8] shrink-0" />
                      )}
                      <span className="text-xs text-[#0f172a] leading-tight">{service.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#dc2626] bg-[#fee2e2] p-2 rounded-xl border border-[#dc2626]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Tombol Kirim ke WhatsApp (Satu-satunya cara menutup pop-up) */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] sm:shadow-[4px_4px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim ke WhatsApp &amp; Buka Portofolio</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
