"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { company } from "@/constants/company";
import { contactSection, ctaLabels } from "@/constants/content";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: contactSection.categories[0],
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "" });

  function handlePhoneChange(raw: string) {
    // Hanya izinkan angka, +, spasi, dan tanda hubung
    const filtered = raw.replace(/[^\d+\-\s]/g, "");
    setForm((current) => ({ ...current, phone: filtered }));
    const digits = filtered.replace(/[^\d]/g, "");
    if (filtered && digits.length < 9) {
      setErrors((e) => ({ ...e, phone: "Nomor WhatsApp minimal 9 digit angka." }));
    } else {
      setErrors((e) => ({ ...e, phone: "" }));
    }
  }

  function handleNameChange(value: string) {
    setForm((current) => ({ ...current, name: value }));
    if (value && value.trim().length < 2) {
      setErrors((e) => ({ ...e, name: "Nama minimal 2 karakter." }));
    } else {
      setErrors((e) => ({ ...e, name: "" }));
    }
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors = { name: "", phone: "" };
    if (form.name.trim().length < 2) newErrors.name = "Nama minimal 2 karakter.";
    const digits = form.phone.replace(/[^\d]/g, "");
    if (digits.length < 9) newErrors.phone = "Nomor WhatsApp minimal 9 digit angka.";
    if (newErrors.name || newErrors.phone) {
      setErrors(newErrors);
      return;
    }
    window.open(createWhatsAppLink(form), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#0B1220]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#0B1220",
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%),
            radial-gradient(circle, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 30px 30px",
          backgroundPosition: "center, 0 0",
        }}
      />
      <div className="container relative z-10">
        <SectionHeader
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          description={contactSection.description}
          dark
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.78fr]">
          <form className="rounded-3xl bg-white p-6 shadow-soft md:p-8" onSubmit={submitForm}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-mki-charcoal">
                {contactSection.form.name}
                <Input
                  required
                  value={form.name}
                  placeholder={contactSection.form.namePlaceholder}
                  onChange={(event) => handleNameChange(event.target.value)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs font-semibold text-red-500">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-mki-charcoal">
                {contactSection.form.phone}
                <Input
                  required
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  placeholder={contactSection.form.phonePlaceholder}
                  onChange={(event) => handlePhoneChange(event.target.value)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className="text-xs font-semibold text-red-500">
                    {errors.phone}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-mki-charcoal">
                {contactSection.form.category}
                <Select value={form.category} onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}>
                  {contactSection.categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-mki-charcoal">
                {contactSection.form.location}
                <Input
                  value={form.location}
                  placeholder={contactSection.form.locationPlaceholder}
                  onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))}
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-mki-charcoal md:col-span-2">
                {contactSection.form.message}
                <Textarea
                  value={form.message}
                  placeholder={contactSection.form.messagePlaceholder}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                />
              </label>
            </div>
            <Button className="mt-6 w-full" size="lg" type="submit">
              <MessageCircle className="size-5" />
              {ctaLabels.sendWhatsApp}
            </Button>
          </form>
          <aside className="rounded-3xl border border-white/10 bg-[#111827]/95 p-6 text-white shadow-[0_24px_90px_rgba(232,93,4,0.14),0_0_0_1px_rgba(249,115,22,0.05)] backdrop-blur-xl md:p-8">
            <h3 className="text-2xl font-black">{contactSection.infoTitle}</h3>
            <div className="mt-8 grid gap-5">
              <a className="flex min-w-0 gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                <Phone className="mt-0.5 size-5 shrink-0 text-mki-orange" />
                <span className="min-w-0 text-sm leading-7 text-white/75">
                  <span className="block font-bold text-white">Kontak Official</span>
                  <span className="break-words">{company.phone}</span>
                </span>
              </a>
              <a className="flex min-w-0 gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15" href={createWhatsAppLink(undefined, { recipient: "partnership" })} target="_blank" rel="noreferrer">
                <Phone className="mt-0.5 size-5 shrink-0 text-mki-orange" />
                <span className="min-w-0 text-sm leading-7 text-white/75">
                  <span className="block font-bold text-white">Kontak Kemitraan</span>
                  <span className="break-words">{company.partnershipPhone}</span>
                </span>
              </a>
              <a className="flex min-w-0 gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15" href={`mailto:${company.email}`}>
                <Mail className="mt-0.5 size-5 shrink-0 text-mki-orange" />
                <span className="min-w-0 break-words text-sm leading-7 text-white/75">{company.email}</span>
              </a>
              <a className="flex min-w-0 gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15" href={company.mapUrl} target="_blank" rel="noreferrer">
                <MapPin className="mt-0.5 size-5 shrink-0 text-mki-orange" />
                <span className="min-w-0 break-words text-sm leading-7 text-white/75">{company.address}</span>
              </a>
            </div>
          </aside>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <a
            className="grid gap-5 rounded-3xl border border-white/10 bg-white p-6 text-mki-charcoal shadow-soft md:grid-cols-[auto_1fr] md:items-center md:p-8"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mx-auto flex w-full max-w-48 items-center justify-center rounded-2xl border border-border bg-white p-3 md:max-w-44">
              <Image
                src="/images/qr/whatsapp-utama.png"
                alt="QR WhatsApp utama MKI"
                width={320}
                height={320}
                className="aspect-square w-full object-contain"
              />
            </span>
            <span className="text-center md:text-left">
              <span className="block text-sm font-black uppercase tracking-[0.14em] text-mki-orange">QR Kontak Official</span>
              <span className="mt-3 block text-2xl font-black text-mki-charcoal">Hubungi Kontak Official MKI</span>
              <span className="mt-3 block text-sm font-semibold leading-7 text-mki-gray">
                Scan atau klik QR untuk membuka WhatsApp utama dan konsultasi kebutuhan interior.
              </span>
            </span>
          </a>
          <a
            className="grid gap-5 rounded-3xl border border-white/10 bg-white p-6 text-mki-charcoal shadow-soft md:grid-cols-[auto_1fr] md:items-center md:p-8"
            href={createWhatsAppLink(undefined, { recipient: "partnership" })}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mx-auto flex w-full max-w-48 items-center justify-center rounded-2xl border border-border bg-white p-3 md:max-w-44">
              <Image
                src="/images/qr/whatsapp-kemitraan.png"
                alt="QR WhatsApp kemitraan MKI"
                width={320}
                height={320}
                className="aspect-square w-full object-contain"
              />
            </span>
            <span className="text-center md:text-left">
              <span className="block text-sm font-black uppercase tracking-[0.14em] text-mki-orange">QR Kemitraan</span>
              <span className="mt-3 block text-2xl font-black text-mki-charcoal">Hubungi Tim Kemitraan MKI</span>
              <span className="mt-3 block text-sm font-semibold leading-7 text-mki-gray">
                Scan atau klik QR untuk membuka WhatsApp kemitraan dengan template pesan kerja sama.
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
